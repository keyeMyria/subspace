import React from "react"
import { Route, Switch } from "react-router-dom"

import * as Paths from "./constants/paths"

import Auth from "../containers/auth"
import AuthRoute from "../containers/auth-route"
import GuestRoute from "../containers/guest-route"
import Home from "./home"
import Login from "./login"
import Register from "./register"
import PageNotFound from "./page-not-found"

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
