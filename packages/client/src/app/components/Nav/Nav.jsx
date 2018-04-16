// @flow

import React from "react"
import PropTypes from "prop-types"
import { Link, NavLink } from "react-router-dom"
import { Paths } from "../../constants"

import { Menu, Container } from "semantic-ui-react"

type Props = {
  isAuthenticated: boolean,
  onLogoutClick: Function,
}

function Nav(props: Props) {
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
