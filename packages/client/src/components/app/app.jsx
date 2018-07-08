import React from "react"
import { hot } from "react-hot-loader"
import { Link, Router } from "react-router-dom"
import { ConnectedRouter } from "connected-react-router"

import Nav from "../../containers/nav"

import styles from "./app.css"

const App = ({ history, routes }) => (
  <Router history={history}>
    <div className={styles.app}>
      <Nav />
      {routes}
    </div>
  </Router>
)

export default hot(module)(App)
