// @flow

import { Loop, Physics, Ships as CoreShips } from "@subspace/core"

import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "remote-redux-devtools"

import type { Connection, Server as UdpServer } from "@web-udp/server"
import type { AuthClient } from "../auth"
import type { Db } from "../data"

import redisConfig from "../../cfg/redis.config"
import * as Scheduler from "../scheduler"
import { SpatialIndex } from "../cache"
import * as Clients from "../modules/clients"
import * as Ships from "../modules/ships"
import * as Users from "../modules/users"
import * as AdjacentBodies from "../modules/adjacent-bodies"
import reducers from "../reducers"

import type { Store } from "../types"

type ConfigureStoreOptions = {
  db: Db,
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

const composeEnhancers = composeWithDevTools({
  port: 9001,
  actionsBlacklist: [
    Loop.LOOP_TICK,
    Physics.PHYSICS_UPDATE_BODY,
    AdjacentBodies.ADJACENT_BODIES_UPDATE,
  ],
})

export function configureStore(
  options: ConfigureStoreOptions,
): Store {
  const { db, auth, tickRate, sendRate, udp } = options

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
      // Handles loading of users and sending model updates to client
      Users.createMiddleware(db, sendRate),
      // Handles authentication of new connections and sending of messages
      Clients.createMiddleware(udp, auth),
    ),
  ]

  const rootReducer = combineReducers(reducers)
  const store = createStore(
    rootReducer,
    composeEnhancers(...enhancers),
  )

  return store
}
