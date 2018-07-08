import { epics as coreEpics } from "@subspace/core"
import { createLogger } from "redux-logger"

import {
  connectRouter,
  routerMiddleware as createRouterMiddleware,
} from "connected-react-router"
import { applyMiddleware, createStore, combineReducers } from "redux"
import { createEpicMiddleware, combineEpics } from "redux-observable"
import { composeWithDevTools } from "redux-devtools-extension"

import { Physics, Loop } from "@subspace/core"

import epics from "./epics"
import reducers from "./reducers"

const loggerMiddleware = createLogger({
  predicate: (getState, action) =>
    [Physics.APPLY_SNAPSHOT, Loop.TICK].indexOf(action.type) === -1,
})
const composeEnhancers = composeWithDevTools({
  actionsBlacklist: [Loop.TICK, Physics.APPLY_SNAPSHOT],
})

export function configureStore(options) {
  const { history } = options
  const routerMiddleware = createRouterMiddleware(history)

  const epicMiddleware = createEpicMiddleware()
  const middleware = [
    epicMiddleware,
    routerMiddleware,
    loggerMiddleware,
  ]
  const rootReducer = combineReducers(reducers)
  const rootEpic = combineEpics(...coreEpics, ...epics)

  const store = createStore(
    connectRouter(history)(rootReducer),
    composeEnhancers(applyMiddleware(...middleware)),
  )

  epicMiddleware.run(rootEpic)

  return store
}
