// @flow

import type { Action } from "./action-types"
import type { Ship } from "../../../model"
import * as ActionTypes from "./action-types"
import { getShip } from "./selectors"

export type State = {
  byId: {
    [number]: Ship,
  },
}

const initialState: State = {
  byId: {},
}

export default function reducer(
  state: State = initialState,
  action: Action,
): State {
  switch (action.type) {
    case ActionTypes.ADD: {
      const { ship } = action.payload
      return {
        ...state,
        byId: {
          ...state.byId,
          [ship.id]: ship,
        },
      }
    }
    case ActionTypes.UPDATE: {
      const { ship } = action.payload
      return {
        ...state,
        byId: {
          ...state.byId,
          [ship.id]: { ...getShip(state, ship.id), ...ship },
        },
      }
    }
    default:
      return state
  }
}
