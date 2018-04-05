// @flow

import thunk from "redux-thunk"

import {
  reducers as coreReducers,
  Loop,
  Physics,
  Ships,
} from "@subspace/core"

import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux"

import type { Scheduler, PlayerId } from "@subspace/core"
import type { Connection } from "@web-udp/server"

import { SpatialIndex } from "../cache"
import * as StateUpdates from "../middleware/state-updates"

import type { Middleware, Store } from "../types"
import type { SpatialIndex as SpatialIndexType } from "../cache/types"

type ConfigureStoreOptions = {
  spatialIndex: SpatialIndexType,
  scheduler: Scheduler,
  getPlayers: () => { [PlayerId]: Connection },
  sendRate: number,
}

const physicsDriver = Physics.P2Driver.create({
  gravity: [0, 0],
})

export const configureStore = (
  options: ConfigureStoreOptions,
): Store => {
  const enhancers = [
    applyMiddleware(
      thunk,
      SpatialIndex.createMiddleware(options.spatialIndex),
      StateUpdates.createMiddleware(
        options.spatialIndex,
        options.getPlayers,
        options.sendRate,
      ),
      Ships.createMiddleware(physicsDriver),
      Loop.createMiddleware(options.scheduler),
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

  const rootReducer = combineReducers(coreReducers)
  const store = createStore(rootReducer, {}, compose(...enhancers))

  return store
}
