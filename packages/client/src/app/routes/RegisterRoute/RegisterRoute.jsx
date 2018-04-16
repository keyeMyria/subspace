// @flow

import React from "react"
import ReactRouterPropTypes from "react-router-prop-types"

import { Container } from "semantic-ui-react"

import Register from "../../containers/Register"

const RegisterRoute = () => (
  <div>
    <Container>
      <Register />
    </Container>
  </div>
)

RegisterRoute.propTypes = {
  location: ReactRouterPropTypes.location.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  match: ReactRouterPropTypes.match.isRequired,
}

export default RegisterRoute
