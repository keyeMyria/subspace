// @flow

import { createReduxModule } from "@subspace/redux-module"

import type { User } from "../../../model"

type State = {
  byId: {
    [string]: User,
  },
  byActiveShipId: {
    [string]: User,
  },
}

type Add = {
  type: "ADD",
  payload: {
    user: User,
  },
}

type Update = {
  type: "UPDATE",
  payload: {
    user: User,
  },
}

type Action = Add | Update

export type { State as UsersState, Action as UsersAction }

const actionTypes = {
  ADD: "ADD",
  UPDATE: "UPDATE",
}

const actionCreators = {
  addUser(user: User) {
    return {
      type: actionTypes.ADD,
      payload: {
        user,
      },
    }
  },
  updateUser(user: User) {
    return {
      type: actionTypes.UPDATE,
      payload: {
        user,
      },
    }
  },
}

function reducer(
  state: State = {
    byId: {},
    byActiveShipId: {},
  },
  action: Action,
) {
  switch (action.type) {
    case actionTypes.ADD: {
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
    case actionTypes.UPDATE: {
      const { id } = action.payload.user

      if (!id) {
        throw new Error("Attempting to update user with no id")
      }

      const user = {
        ...selectors.getUser(state, id),
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

const selectors = {
  getUsers(state: State) {
    return state.byId
  },
  getUser(state: State, userId: string) {
    return state.byId[userId]
  },
  getUserByActiveShipId(state: State, userId: string) {
    return state.byActiveShipId[userId]
  },
}

export default createReduxModule("Users", {
  actionTypes,
  actionCreators,
  reducer,
  selectors,
})
