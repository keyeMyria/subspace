import React from "react"
import { hot } from "react-hot-loader"
import { Link, Router } from "react-router-dom"
import { ConnectedRouter } from "connected-react-router"

import Nav from "../../containers/nav"

const App = ({ history, routes }) => (
  <Router history={history}>
    <div className="App">
      <h1>Counter app</h1>
      <Nav />
      {routes}
    </div>
  </Router>
)

export default hot(module)(App)
