// @flow

// This file defines selectors used to query the game state starting at the
// root of the Redux store.

import { Users, Ships, Physics } from "../modules"

export const getShipBody = (state: any, shipId: string) => {
  const ship = Ships.getShip(state, shipId)

  if (!ship) {
    return null
  }

  const { bodyId } = ship

  if (!bodyId) {
    return null
  }

  const body = Physics.getBody(state, bodyId)

  if (!body) {
    return null
  }

  return body
}

export const getUserShip = (state: any, userId: string) => {
  const user = Users.getUser(state, userId)

  if (!user) {
    return null
  }

  const { activeShipId } = user

  if (!activeShipId) {
    return null
  }

  return Ships.getShip(state, activeShipId)
}

export const getUserBody = (state: any, userId: string) => {
  const user = Users.getUser(state, userId)

  if (!user) {
    return null
  }

  const { activeShipId } = user

  if (!activeShipId) {
    return null
  }

  return getShipBody(state, activeShipId)
}
