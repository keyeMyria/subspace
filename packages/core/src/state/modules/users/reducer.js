// @flow

import type { User } from "../../../model"

import type { Action } from "./action-types"
import * as ActionTypes from "./action-types"
import { getUser } from "./selectors"

export type State = {
  byId: {
    [number]: User,
  },
  byActiveShipId: {
    [number]: User,
  },
}

const initialState: State = {
  byId: {},
  byActiveShipId: {},
}

export default function reducer(
  state: State = initialState,
  action: Action,
) {
  switch (action.type) {
    case ActionTypes.ADD: {
      const { user } = action.payload
      const byId = {
        ...state.byId,
        [user.id]: user,
      }

      let byActiveShipId = state.byActiveShipId

      if (user.activeShipId) {
        byActiveShipId = {
          ...state.byActiveShipId,
          [user.activeShipId]: user,
        }
      }

      return {
        byId,
        byActiveShipId,
      }
    }
    case ActionTypes.UPDATE: {
      const { id } = action.payload.user

      if (!id) {
        throw new Error("Attempting to update user with no id")
      }

      const user = {
        ...getUser(state, id),
        ...action.payload.user,
      }
      const byId = {
        ...state.byId,
        [user.id]: user,
      }

      let byActiveShipId = state.byActiveShipId

      if (user.activeShipId) {
        byActiveShipId = {
          ...state.byActiveShipId,
          [user.activeShipId]: user,
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
