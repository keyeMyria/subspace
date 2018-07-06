// @flow

import type { UsersAction, UsersState } from "@subspace/core"
import type { Action as ServerAction } from "../../../types"

import { Users, toAsync } from "@subspace/core"
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
  type: "LOAD-",
  payload: {
    userId: string,
  },
}

type LoadRejected = {
  type: "LOAD+",
  payload: {
    userId: string,
  },
  error: Error,
}

type Send = {
  type: "SEND",
  payload: {
    userId: string,
    action: ServerAction,
  },
}

type Remove = {
  type: "REMOVE",
  payload: {
    userId: string,
  },
}

type Action =
  | UsersAction
  | Register
  | Load
  | LoadFulfilled
  | LoadRejected
  | Send
  | Remove

export type { State as UsersState, Action as UsersAction }

const [LOAD, LOAD_FULFILLED, LOAD_REJECTED] = toAsync("LOAD")

const actionTypes = {
  REGISTER: "REGISTER",
  SEND: "SEND",
  REMOVE: "REMOVE",
  LOAD,
  LOAD_FULFILLED,
  LOAD_REJECTED,
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
      type: (actionTypes.LOAD: any),
      payload: {
        userId,
      },
    }
  },
  fulfillLoad(userId: string): LoadFulfilled {
    return {
      type: (actionTypes.LOAD_FULFILLED: any),
      payload: {
        userId,
      },
    }
  },
  rejectLoad(userId: string, error: Error): LoadRejected {
    return {
      type: (actionTypes.LOAD_REJECTED: any),
      payload: {
        userId,
      },
      error,
    }
  },
  send(userId: string, action: ServerAction): Send {
    return {
      type: actionTypes.SEND,
      payload: {
        userId,
        action,
      },
    }
  },
  remove(userId: string): Remove {
    return {
      type: actionTypes.REMOVE,
      payload: {
        userId,
      },
    }
  },
}

function reducer(state: State) {
  return state
}

const selectors = {}

const users = createReduxModule("Users", {
  actionTypes,
  actionCreators,
  reducer,
  selectors,
})

export default composeReduxModules(Users, users)
