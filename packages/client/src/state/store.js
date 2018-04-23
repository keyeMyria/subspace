import {
  connectRouter,
  routerMiddleware as createRouterMiddleware,
} from "connected-react-router"
import { applyMiddleware, createStore, combineReducers } from "redux"
import { createEpicMiddleware, combineEpics } from "redux-observable"
import { composeWithDevTools } from "redux-devtools-extension"

import coreEpics from "./epics"
import * as reduxModules from "./modules"

export function configureStore(reducers, middleware = [], options) {
  const { history } = options
  const routerMiddleware = createRouterMiddleware(history)
  const coreReducers = Object.entries(reduxModules).reduce(
    (reducers, [reduxModuleName, { reducer }]) => ({
      ...reducers,
      [reduxModuleName]: reducer,
    }),
    {},
  )

  const epicMiddleware = createEpicMiddleware(
    combineEpics(...coreEpics),
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
