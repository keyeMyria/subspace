// @flow

import { Loop, Physics, Ships as CoreShips } from "@subspace/core"

import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux"

import type { Connection, Server as UdpServer } from "@web-udp/server"
import type { AuthClient } from "../auth"

import redisConfig from "../../cfg/redis.config"
import db from "../data"
import * as Scheduler from "../scheduler"
import { SpatialIndex } from "../cache"
import * as Clients from "../modules/clients"
import * as Ships from "../modules/ships"
import * as Players from "../modules/players"
import * as AdjacentBodies from "../modules/adjacent-bodies"
import reducers from "../reducers"

import type { Store } from "../types"

type ConfigureStoreOptions = {
  auth: AuthClient,
  tickRate: number,
  sendRate: number,
  udp: UdpServer,
}

const physicsDriver = Physics.P2Driver.create({
  gravity: [0, 0],
})

const spatialIndex = SpatialIndex.create({
  redis: redisConfig,
  key: "ss-body",
  dimensions: 2,
})

export function configureStore(
  options: ConfigureStoreOptions,
): Store {
  const { auth, tickRate, sendRate, udp } = options

  const scheduler = Scheduler.create(tickRate)

  const enhancers = [
    applyMiddleware(
      // Core game loop
      Loop.createMiddleware(scheduler),
      // Handles loading of ships and sending model updates to client
      Ships.createMiddleware(db),
      // Handles ship actions like thrust, turning, etc
      CoreShips.createMiddleware(),
      // Manages spatial index and queries the index each tick
      AdjacentBodies.createMiddleware(spatialIndex),
      // Handles loading of players and sending model updates to client
      Players.createMiddleware(db, sendRate),
      // Handles authentication of new connections and sending of messages
      Clients.createMiddleware(udp, auth),
    ),
  ]

  if (
    typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION__ // eslint-disable-line no-underscore-dangle
  ) {
    enhancers.push(
      window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line no-underscore-dangle
    )
  }

  const rootReducer = combineReducers(reducers)
  const store = createStore(rootReducer, compose(...enhancers))

  return store
}
