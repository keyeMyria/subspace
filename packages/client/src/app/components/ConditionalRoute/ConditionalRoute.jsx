// @flow

import React from "react"
import PropTypes from "prop-types"
import { Route, Redirect } from "react-router-dom"

function ConditionalRoute({ condition, redirectTo, ...props }) {
  return condition ? (
    <Route {...props} />
  ) : (
    <Redirect to={redirectTo} />
  )
}

ConditionalRoute.propTypes = {
  condition: PropTypes.bool.isRequired,
  redirectTo: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
}

export default ConditionalRoute
