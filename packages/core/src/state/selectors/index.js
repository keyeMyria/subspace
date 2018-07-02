// @flow

// This file defines selectors used to query the game state starting at the
// root of the Redux store.

import { Users, Ships, Physics } from "../modules"

export const getShipBody = (state: any, id: number) => {
  const ship = Ships.getShip(state, id)

  if (!ship.bodyId) {
    return null
  }

  const body = Physics.getBody(state, ship.bodyId)

  return body
}

export const getUserShip = (state: any, id: number) => {
  const { activeShipId } = Users.getUser(state, id)

  if (!activeShipId) {
    return null
  }

  return Ships.getShip(state, activeShipId)
}

export const getUserBody = (state: any, id: number) => {
  const { activeShipId } = Users.getUser(state, id)

  if (!activeShipId) {
    return null
  }

  return getShipBody(state, activeShipId)
}
