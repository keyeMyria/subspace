// @flow

import React from "react"
import { Route, Redirect } from "react-router-dom"

function ConditionalRoute({ condition, redirectTo, ...props }) {
  return condition ? (
    <Route {...props} />
  ) : (
    <Redirect to={redirectTo} />
  )
}

export default ConditionalRoute
