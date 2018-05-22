import {
  reduxModules as coreReduxModules,
  epics as coreEpics,
  extractReducers,
} from "@subspace/core"

import {
  connectRouter,
  routerMiddleware as createRouterMiddleware,
} from "connected-react-router"
import { applyMiddleware, createStore, combineReducers } from "redux"
import { createEpicMiddleware, combineEpics } from "redux-observable"
import { composeWithDevTools } from "redux-devtools-extension"

import epics from "./epics"
import * as reduxModules from "./modules"

export function configureStore(options) {
  const { history } = options
  const routerMiddleware = createRouterMiddleware(history)
  const coreReducers = extractReducers(coreReduxModules)
  const reducers = extractReducers(reduxModules)

  const epicMiddleware = createEpicMiddleware(
    combineEpics(...coreEpics, ...epics),
  )

  const coreMiddleware = [epicMiddleware, routerMiddleware]

  const rootReducer = combineReducers({
    ...coreReducers,
    ...reducers,
  })

  return createStore(
    connectRouter(history)(rootReducer),
    composeWithDevTools(
      applyMiddleware(...coreMiddleware, ...middleware),
    ),
  )
}
