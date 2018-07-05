import {
  reduxModules as coreReduxModules,
  epics as coreEpics,
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
import reducers from "./reducers"

export function configureStore(options) {
  const { history } = options
  const routerMiddleware = createRouterMiddleware(history)

  const epicMiddleware = createEpicMiddleware()
  const middleware = [epicMiddleware, routerMiddleware]
  const rootReducer = combineReducers(reducers)
  const rootEpic = combineEpics(...coreEpics, ...epics)

  const store = createStore(
    connectRouter(history)(rootReducer),
    composeWithDevTools(applyMiddleware(...middleware)),
  )

  epicMiddleware.run(rootEpic)

  return store
}
