// @flow

import { Loop, Physics, epics as coreEpics } from "@subspace/core"
import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "remote-redux-devtools"
import { createEpicMiddleware, combineEpics } from "redux-observable"
import type { Server as UdpServer } from "@web-udp/server"
import type { Redimension } from "@subspace/redimension"

import type { AuthClient } from "../auth"
import type { Db } from "../data"
import reducers from "./reducers"
import { SpatialIndex } from "./modules"
import * as UdpMiddleware from "./middleware/udp"
import createSpatialIndexEpics from "./epics/spatial-index"
import createShipsEpics from "./epics/ships"
import createUsersEpics from "./epics/users"
import createPhysicsEpics from "./epics/physics"

import type { Store, State } from "../types"

type ConfigureStoreOptions = {
  db: Db,
  auth: AuthClient,
  tickRate: number,
  sendRate: number,
  udp: UdpServer,
  redimension: Redimension,
}

const composeEnhancers = composeWithDevTools({
  port: 3000,
  actionsBlacklist: [
    Loop.TICK,
    Physics.UPDATE_BODY,
    SpatialIndex.UPDATE,
  ],
})

// async function getPreloadedState(db: Db): State {
//   const ships = (await db.Ship.findAll()).map(ship => ship.toJSON())
//   const bodies = (await db.Body.findAll()).map(body => body.toJSON())

//   return {
//     Ships: {
//       byId: ships.reduce((a, ship) => {
//         if (!ship.id) {
//           return a
//         }
//         return { ...a, [ship.id]: ship }
//       }, {}),
//     },
//     Physics: {
//       byId: bodies.reduce((a, body) => {
//         if (!body.id) {
//           return a
//         }
//         return { ...a, [body.id]: body }
//       }, {}),
//     },
//   }
// }

export async function configureStore(
  options: ConfigureStoreOptions,
): Promise<Store> {
  const { db, auth, sendRate, udp, redimension } = options
  const epicMiddleware = createEpicMiddleware()
  const rootReducer = combineReducers(reducers)
  const rootEpic = combineEpics(
    ...createSpatialIndexEpics(redimension),
    ...createShipsEpics(db),
    ...createUsersEpics(db, sendRate),
    ...createPhysicsEpics(db),
    ...coreEpics,
  )
  const enhancers = [
    applyMiddleware(epicMiddleware, UdpMiddleware.make(udp, auth)),
  ]
  const store = createStore(
    rootReducer,
    // await getPreloadedState(db),
    composeEnhancers(...enhancers),
  )

  epicMiddleware.run(rootEpic)

  return store
}
