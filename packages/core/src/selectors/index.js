// @flow

// This file defines selectors used to query the game state starting at the
// root of the Redux store.

import type { PlayerId, ShipId } from "../model"
import type { State } from "../types"

import { getPlayer, getPlayers } from "../modules/players"
import { getShip } from "../modules/ships"
import { getBody } from "../modules/physics"

export const getShipBody = (state: State, id: ShipId) => {
  const ship = getShip(state.ships, id)

  if (!ship.bodyId) {
    return null
  }

  const body = getBody(state.physics, ship.bodyId)

  return body
}

export const getPlayerShip = (state: State, id: PlayerId) => {
  const { activeShipId } = getPlayer(state.players, id)

  if (!activeShipId) {
    return null
  }

  return getShip(state.ships, activeShipId)
}

export const getPlayerBody = (state: State, id: PlayerId) => {
  const { activeShipId } = getPlayer(state.players, id)

  if (!activeShipId) {
    return null
  }

  return getShipBody(state, activeShipId)
}
