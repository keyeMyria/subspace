// @flow

import type { PhysicsDriver } from "@subspace/core"

import { Epics } from "@subspace/core"

import {
  connectRouter,
  routerMiddleware as createRouterMiddleware,
} from "connected-react-router"
import { applyMiddleware, createStore, combineReducers } from "redux"
import { createEpicMiddleware, combineEpics } from "redux-observable"
import { composeWithDevTools } from "redux-devtools-extension"

import { Udp } from "./modules"
import { Physics, Loop } from "@subspace/core"

import epics from "./epics"
import reducers from "./reducers"

const actionsBlacklist = [
  Physics.APPLY_SNAPSHOT,
  Physics.DRIVER_UPDATE,
  Loop.TICK,
  Udp.SEND,
]

const composeEnhancers = composeWithDevTools({
  actionsBlacklist,
})

type ConfigureStoreOptions = {
  history: any,
  physicsDriver: PhysicsDriver,
}

export function configureStore(options: ConfigureStoreOptions) {
  const { history, physicsDriver } = options
  const routerMiddleware = createRouterMiddleware(history)

  const epicMiddleware = createEpicMiddleware()
  const middleware = [epicMiddleware, routerMiddleware]
  const rootReducer = combineReducers(reducers)
  const rootEpic = combineEpics(
    ...Epics.make({ physicsDriver }),
    ...epics,
  )

  const store = createStore(
    connectRouter(history)(rootReducer),
    composeEnhancers(applyMiddleware(...middleware)),
  )

  epicMiddleware.run(rootEpic)

  return store
}
