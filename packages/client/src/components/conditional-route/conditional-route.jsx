// @flow

import React from "react"
import { Route, Redirect } from "react-router-dom"

type Props = {
  condition: boolean,
  redirectTo: string,
}

function ConditionalRoute({
  condition,
  redirectTo,
  ...props
}: Props) {
  return condition ? (
    <Route {...props} />
  ) : (
    <Redirect to={redirectTo} />
  )
}

export default ConditionalRoute
