// @flow

import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import {
  connectRouter,
  routerMiddleware as createRouterMiddleware,
} from "connected-react-router"
import { createEpicMiddleware } from "redux-observable"
import { createBrowserHistory } from "history"
import { composeWithDevTools } from "redux-devtools-extension"

import rootReducer, { initialState } from "../reducers"
import rootEpic from "../epics"

const history = createBrowserHistory({
  basename: process.env.BASENAME,
})

const epicMiddleware = createEpicMiddleware(rootEpic)
const routerMiddleware = createRouterMiddleware(history)

const defaultMiddleware = [routerMiddleware, thunk, epicMiddleware]

const configureStore = (middleware = [], storeEnhancers = []) =>
  createStore(
    connectRouter(history)(rootReducer),
    initialState,
    composeWithDevTools(
      applyMiddleware(...defaultMiddleware, ...middleware),
      ...storeEnhancers,
    ),
  )

export { configureStore, history, epicMiddleware, routerMiddleware }
