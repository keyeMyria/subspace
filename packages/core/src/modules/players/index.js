// @flow

import type { Action } from "../../types"
import type { Player, PlayerId } from "../../model"

// Actions

export const PLAYER_ADD = "player/add"
export type PlayerAdd = {
  type: "player/add",
  payload: {
    player: Player,
  },
}

// Action creators

export const addPlayer = (player: Player) => ({
  type: PLAYER_ADD,
  payload: {
    player,
  },
})

// Reducer

export type PlayerState = {
  byId: {
    [PlayerId]: Player,
  },
}

const initialState: PlayerState = {
  byId: {},
}

export default function reducer(
  state: PlayerState = initialState,
  action: Action,
) {
  switch (action.type) {
    case PLAYER_ADD:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.player.id]: action.payload.player,
        },
      }
    default:
      return state
  }
}

// Selectors

export const getPlayer = (state: PlayerState, id: PlayerId) =>
  state.byId[id]
