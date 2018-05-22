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

render(
  <Provider store={configureStore({ history })}>
    <App history={history} routes={routes} />
  </Provider>,
  root,
)
