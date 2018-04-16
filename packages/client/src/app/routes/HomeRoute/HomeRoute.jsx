// @flow

import React from "react"
import ReactRouterPropTypes from "react-router-prop-types"

import { Header, Container } from "semantic-ui-react"

import Game from "../../containers/Game"

const HomeRoute = () => (
  <div>
    <Container>
      <Header as="h1" textAlign="center">
        HomeRoute
      </Header>
      <Game />
    </Container>
  </div>
)

HomeRoute.propTypes = {
  location: ReactRouterPropTypes.location.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  match: ReactRouterPropTypes.match.isRequired,
}

export default HomeRoute
