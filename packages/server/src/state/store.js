// @flow

import { Loop, Physics, epics as coreEpics } from "@subspace/core"
import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "remote-redux-devtools"
import { createEpicMiddleware, combineEpics } from "redux-observable"
import type { Connection, Server as UdpServer } from "@web-udp/server"

import type { AuthClient } from "../auth"
import type { Db } from "../data"
import redisConfig from "../../cfg/redis.config"
import { SpatialIndex } from "../cache"
import reducers from "./reducers"
import AdjacentBodies from "./modules/adjacent-bodies"
import createClientsEpics from "./epics/clients"
import createAdjacentBodiesEpics from "./epics/adjacent-bodies"
import createShipsEpics from "./epics/ships"
import createUsersEpics from "./epics/users"

import { tap, ignoreElements } from "rxjs/operators"
import type { Store } from "../types"

type ConfigureStoreOptions = {
  db: Db,
  auth: AuthClient,
  tickRate: number,
  sendRate: number,
  udp: UdpServer,
}

const spatialIndex = SpatialIndex.make({
  redis: redisConfig,
  key: "ss-body",
  dimensions: 2,
})

const composeEnhancers = composeWithDevTools({
  port: 9000,
  actionsBlacklist: [
    Loop.TICK,
    Physics.UPDATE_BODY,
    AdjacentBodies.UPDATE,
  ],
})

export function configureStore(
  options: ConfigureStoreOptions,
): Store {
  const { db, auth, tickRate, sendRate, udp } = options
  const epicMiddleware = createEpicMiddleware()
  const rootReducer = combineReducers(reducers)
  const rootEpic = combineEpics(
    ...createAdjacentBodiesEpics(spatialIndex),
    ...createClientsEpics(udp, auth),
    ...createShipsEpics(db),
    ...createUsersEpics(db, sendRate),
    ...coreEpics,
  )
  const enhancers = [applyMiddleware(epicMiddleware)]
  const store = createStore(
    rootReducer,
    composeEnhancers(...enhancers),
  )

  epicMiddleware.run(rootEpic)

  return store
}
