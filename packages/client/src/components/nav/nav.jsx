// @flow

import React from "react"
import { Link, NavLink } from "react-router-dom"

import * as Paths from "../../routes/constants/paths"

type Props = {
  isAuthenticated: boolean,
  onLogoutClick: Function,
}

function Nav(props: Props) {
  return (
    <nav>
      <ul>
        <li
          as={({ className }) => (
            <NavLink className={className} to={Paths.HOME} exact>
              Home
            </NavLink>
          )}
        />
        {!props.isAuthenticated && (
          <li
            as={({ className }) => (
              <NavLink className={className} to={Paths.LOGIN}>
                Login
              </NavLink>
            )}
          />
        )}
        {!props.isAuthenticated && (
          <li
            as={({ className }) => (
              <NavLink className={className} to={Paths.REGISTER}>
                Register
              </NavLink>
            )}
          />
        )}
        {props.isAuthenticated && (
          <li as="a" onClick={props.onLogoutClick}>
            Logout
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Nav
