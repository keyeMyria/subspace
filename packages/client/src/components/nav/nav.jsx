// @flow

import React from "react"
import { Link, NavLink } from "react-router-dom"
import { Menu, Container } from "semantic-ui-react"

import * as Paths from "../../routes/constants/paths"

function Nav(props) {
  return (
    <Menu fixed="top" inverted style={{ borderRadius: 0 }}>
      <Container>
        <Menu.Item
          as={({ className }) => (
            <NavLink className={className} to={Paths.HOME} exact>
              Home
            </NavLink>
          )}
        />
        {!props.isAuthenticated && (
          <Menu.Item
            as={({ className }) => (
              <NavLink className={className} to={Paths.LOGIN}>
                Login
              </NavLink>
            )}
          />
        )}
        {!props.isAuthenticated && (
          <Menu.Item
            as={({ className }) => (
              <NavLink className={className} to={Paths.REGISTER}>
                Register
              </NavLink>
            )}
          />
        )}
        {props.isAuthenticated && (
          <Menu.Item as="a" onClick={props.onLogoutClick}>
            Logout
          </Menu.Item>
        )}
      </Container>
    </Menu>
  )
}

export default Nav
