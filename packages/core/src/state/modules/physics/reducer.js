// @flow

import type { Action } from "./action-types"
import type { Body } from "../../../model"
import * as ActionTypes from "./action-types"
import { getBody } from "./selectors"

export type State = {
  byId: {
    [number]: Body,
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
    case ActionTypes.ADD_BODY:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.body.id]: action.payload.body,
        },
      }
    case ActionTypes.UPDATE_BODY:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.body.id]: {
            ...getBody(state, action.payload.body.id),
            ...action.payload.body,
          },
        },
      }
    default:
      return state
  }
}
