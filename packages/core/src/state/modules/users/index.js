// @flow

import type { Action } from "../../../types"
import type { User } from "../../../model"

// Actions

export const USER_ADD = "user/add"
export type UserAdd = {
  type: "user/add",
  payload: {
    user: User,
  },
}

export const USER_UPDATE = "user/update"
export type UserUpdate = {
  type: "user/update",
  payload: {
    user: User,
  },
}

export type UserAction = UserAdd | UserUpdate

// Action creators

export function addUser(user: User) {
  return {
    type: USER_ADD,
    payload: {
      user,
    },
  }
}

export function updateUser(user: User) {
  return {
    type: USER_UPDATE,
    payload: {
      user,
    },
  }
}

// Reducer

export type UserState = {
  byId: {
    [number]: User,
  },
  byActiveShipId: {
    [number]: User,
  },
}

const initialState: UserState = {
  byId: {},
  byActiveShipId: {},
}

export default function reducer(
  state: UserState = initialState,
  action: Action,
) {
  switch (action.type) {
    case USER_ADD: {
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
    case USER_UPDATE: {
      const { id } = action.payload.user
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

// Selectors

export const getUsers = (state: UserState) => state.byId

export const getUser = (state: UserState, id: number) =>
  state.byId[id]

export const getUserByActiveShipId = (state: UserState, id: number) =>
  state.byActiveShipId[id]
