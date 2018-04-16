// @flow

import React from "react"
import ReactRouterPropTypes from "react-router-prop-types"

import { Container } from "semantic-ui-react"

import Login from "../../containers/Login"

const LoginRoute = () => (
  <div>
    <Container>
      <Login />
    </Container>
  </div>
)

LoginRoute.propTypes = {
  location: ReactRouterPropTypes.location.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  match: ReactRouterPropTypes.match.isRequired,
}

export default LoginRoute
