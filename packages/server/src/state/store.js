// @flow

import { Loop, Physics, Epics } from "@subspace/core"
import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "remote-redux-devtools"
import { createEpicMiddleware, combineEpics } from "redux-observable"
import type { Server as UdpServer } from "@web-udp/server"
import type { Redimension } from "@subspace/redimension"
import type { PhysicsDriver } from "@subspace/core"

import type { AuthClient } from "../auth"
import type { Db } from "../data"
import reducers from "./reducers"
import { SpatialIndex } from "./modules"
import * as UdpMiddleware from "./middleware/udp"
import createSpatialIndexEpics from "./epics/spatial-index"
import createShipsEpics from "./epics/ships"
import createUsersEpics from "./epics/users"
import createPhysicsEpics from "./epics/physics"

import type { Store } from "../types"

type ConfigureStoreOptions = {
  db: Db,
  auth: AuthClient,
  tickRate: number,
  sendRate: number,
  udp: UdpServer,
  redimension: Redimension,
  physicsDriver: PhysicsDriver,
}

const composeEnhancers = composeWithDevTools({
  port: 3000,
  actionsBlacklist: [
    Loop.TICK,
    Physics.UPDATE_BODY,
    SpatialIndex.UPDATE,
  ],
})

export async function configureStore(
  options: ConfigureStoreOptions,
): Promise<Store> {
  const {
    db,
    auth,
    sendRate,
    udp,
    redimension,
    physicsDriver,
  } = options
  const epicMiddleware = createEpicMiddleware()
  const rootReducer = combineReducers(reducers)
  const rootEpic = combineEpics(
    ...createSpatialIndexEpics(redimension),
    ...createShipsEpics(db),
    ...createUsersEpics(db, sendRate),
    ...createPhysicsEpics(db),
    ...Epics.make({ physicsDriver }),
  )
  const enhancers = [
    applyMiddleware(epicMiddleware, UdpMiddleware.make(udp, auth)),
  ]
  const store = createStore(
    rootReducer,
    composeEnhancers(...enhancers),
  )

  epicMiddleware.run(rootEpic)

  return store
}
