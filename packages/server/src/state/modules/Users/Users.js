// @flow

import type { UsersAction, UsersState, Ship } from "@subspace/core"
import type { Action as ServerAction } from "../../../types"
import type { User } from "../../../model"

import { Users } from "@subspace/core"
import {
  createReduxModule,
  composeReduxModules,
} from "@subspace/redux-module"

type State = UsersState & {}

type Register = {
  type: "REGISTER",
  payload: {
    username: string,
    password: string,
  },
}

type Load = {
  type: "LOAD",
  payload: {
    userId: string,
  },
}

type LoadFulfilled = {
  type: "LOAD+",
  payload: {
    user: User,
  },
}

type LoadRejected = {
  type: "LOAD-",
  payload: {
    userId: string,
  },
  error: Error,
}

type Send = {
  type: "SEND",
  payload: {
    userId: string,
    actions: ServerAction[],
  },
}

type MakeUserShip = {
  type: "MAKE_USER_SHIP",
  payload: {
    userId: string,
    ship: Ship,
  },
}

type Action =
  | UsersAction
  | Register
  | Load
  | LoadFulfilled
  | LoadRejected
  | Send
  | MakeUserShip

export type { State as UsersState, Action as UsersAction }

const actionTypes = {
  REGISTER: "REGISTER",
  SEND: "SEND",
  LOAD: "LOAD",
  LOAD_FULFILLED: "LOAD+",
  LOAD_REJECTED: "LOAD-",
  MAKE_USER_SHIP: "MAKE_USER_SHIP",
}

const actionCreators = {
  registerUser(username: string, password: string): Register {
    return {
      type: actionTypes.REGISTER,
      payload: {
        username,
        password,
      },
    }
  },
  loadUser(userId: string): Load {
    return {
      type: actionTypes.LOAD,
      payload: {
        userId,
      },
    }
  },
  fulfillLoad(user: User): LoadFulfilled {
    return {
      type: actionTypes.LOAD_FULFILLED,
      payload: {
        user,
      },
    }
  },
  rejectLoad(userId: string, error: Error): LoadRejected {
    return {
      type: actionTypes.LOAD_REJECTED,
      payload: {
        userId,
      },
      error,
    }
  },
  send(userId: string, ...actions: ServerAction[]): Send {
    return {
      type: actionTypes.SEND,
      payload: {
        userId,
        actions,
      },
    }
  },
  makeUserShip(userId: string, ship: Ship): MakeUserShip {
    return {
      type: actionTypes.MAKE_USER_SHIP,
      payload: {
        userId,
        ship,
      },
    }
  },
}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case actionTypes.LOAD_FULFILLED: {
      const { user } = action.payload
      return {
        ...state,
        byId: {
          ...state.byId,
          [user.id]: user,
        },
      }
    }
    default:
      return state
  }
}

const selectors = {}

const users = createReduxModule("Users", {
  actionTypes,
  actionCreators,
  reducer,
  selectors,
})

export default composeReduxModules(Users, users)
