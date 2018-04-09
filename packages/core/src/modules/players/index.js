// @flow

import type { Action } from "../../types"
import type { Player, PlayerId, ShipId } from "../../model"

// Actions

export const PLAYER_ADD = "player/add"
export type PlayerAdd = {
  type: "player/add",
  payload: {
    player: Player,
  },
}

export const PLAYER_UPDATE = "player/update"
export type PlayerUpdate = {
  type: "player/update",
  payload: {
    player: Player,
  },
}

export type PlayerAction = PlayerAdd | PlayerUpdate

// Action creators

export function addPlayer(player: Player) {
  return {
    type: PLAYER_ADD,
    payload: {
      player,
    },
  }
}

export function updatePlayer(player: Player) {
  return {
    type: PLAYER_UPDATE,
    payload: {
      player,
    },
  }
}

// Reducer

export type PlayerState = {
  byId: {
    [PlayerId]: Player,
  },
  byActiveShipId: {
    [ShipId]: Player,
  },
}

const initialState: PlayerState = {
  byId: {},
  byActiveShipId: {},
}

export default function reducer(
  state: PlayerState = initialState,
  action: Action,
) {
  switch (action.type) {
    case PLAYER_ADD: {
      const { player } = action.payload
      const byId = {
        ...state.byId,
        [player.id]: player,
      }

      let byActiveShipId = state.byActiveShipId

      if (player.activeShipId) {
        byActiveShipId = {
          ...state.byActiveShipId,
          [player.activeShipId]: player,
        }
      }

      return {
        byId,
        byActiveShipId,
      }
    }
    case PLAYER_UPDATE: {
      const { id } = action.payload.player
      const player = {
        ...getPlayer(state, id),
        ...action.payload.player,
      }
      const byId = {
        ...state.byId,
        [player.id]: player,
      }

      let byActiveShipId = state.byActiveShipId

      if (player.activeShipId) {
        byActiveShipId = {
          ...state.byActiveShipId,
          [player.activeShipId]: player,
        }
      }

      return {
        byId,
        byActiveShipId,
      }
    }
    default:
      return state
  }
}

// Selectors

export const getPlayers = (state: PlayerState) => state.byId

export const getPlayer = (state: PlayerState, id: PlayerId) =>
  state.byId[id]

export const getPlayerByActiveShipId = (
  state: PlayerState,
  id: ShipId,
) => state.byActiveShipId[id]
