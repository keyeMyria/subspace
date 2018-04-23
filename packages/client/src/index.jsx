import React from "react"
import { Provider } from "react-redux"
import { render } from "react-dom"
import App from "./components/app"
import { configureStore } from "./state"
import routes from "./routes"
import history from "./history"

import "./vendor"
import "./css/global.css"

const root = document.createElement("div")

root.classList.add("Root")

document.body.appendChild(root)

const reducers = {}
const middleware = []

render(
  <Provider store={configureStore(reducers, middleware, { history })}>
    <App history={history} routes={routes} />
  </Provider>,
  root,
)
