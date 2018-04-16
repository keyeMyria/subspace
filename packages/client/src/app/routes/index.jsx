// @flow

import React from "react"
import { Route, Switch } from "react-router-dom"

import { Paths } from "../constants"
import Auth from "../containers/Auth"
import AuthRoute from "../containers/AuthRoute"
import GuestRoute from "../containers/GuestRoute"

import Home from "./HomeRoute"
import PageNotFound from "./PageNotFoundRoute"
import Login from "./LoginRoute"
import Register from "./RegisterRoute"

const routes = (
  <Auth>
    <Switch>
      <AuthRoute exact path={Paths.HOME} component={Home} />
      <GuestRoute path={Paths.LOGIN} component={Login} />
      <GuestRoute path={Paths.REGISTER} component={Register} />
      <Route component={PageNotFound} />
    </Switch>
  </Auth>
)

export default routes
