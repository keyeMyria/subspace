// @flow

import React from "react"
import ReactRouterPropTypes from "react-router-prop-types"
import { ConnectedRouter } from "connected-react-router"

import Nav from "../../containers/Nav"

import styles from "./App.css"

import routes from "../../routes"

const App = ({ history }) => (
  <ConnectedRouter history={history}>
    <div>
      <Nav />
      {routes}
    </div>
  </ConnectedRouter>
)

App.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
}

export default App
