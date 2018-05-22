// @flow

import type { Action } from "../../../types"

import { UPDATE } from "./action-types"

export type State = {
  byUserId: { [number]: number[] },
}

const initialState = {
  byUserId: {},
}

export default function reducer(
  state: State = initialState,
  action: Action,
) {
  switch (action.type) {
    case UPDATE:
      return {
        ...state,
        byUserId: {
          ...state.byUserId,
          ...action.payload.adjacentBodies,
        },
      }
    default:
      return state
  }
}
