// @flow

import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"

import App, { configureStore, history } from "./app"
import "./css/global.css"

const store = configureStore()

render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById("app"),
)
