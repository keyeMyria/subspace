// @flow

// This file defines selectors used to query the game state starting at the
// root of the Redux store.

import type { State } from "../types"

import { getUser, getUsers } from "../modules/users"
import { getShip } from "../modules/ships"
import { getBody } from "../modules/physics"

export const getShipBody = (state: State, id: number) => {
  const ship = getShip(state.ships, id)

  if (!ship.bodyId) {
    return null
  }

  const body = getBody(state.physics, ship.bodyId)

  return body
}

export const getUserShip = (state: State, id: number) => {
  const { activeShipId } = getUser(state.users, id)

  if (!activeShipId) {
    return null
  }

  return getShip(state.ships, activeShipId)
}

export const getUserBody = (state: State, id: number) => {
  const { activeShipId } = getUser(state.users, id)

  if (!activeShipId) {
    return null
  }

  return getShipBody(state, activeShipId)
}
