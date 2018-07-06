// @flow

import type { UserAction, UserState } from "@subspace/core"
import type { Action as ServerAction } from "../../../types"

import { Users, toAsync } from "@subspace/core"
import {
  createReduxModule,
  composeReduxModules,
} from "@subspace/redux-module"

export type State = UserState & {}

export type Register = {
  type: "REGISTER",
  payload: {
    user: string,
    username: string,
    password: string,
  },
}

export type Load = {
  type: "LOAD",
  payload: {
    userId: number,
  },
}

export type LoadFulfilled = {
  type: "LOAD-",
  payload: {
    userId: number,
    err: Error,
  },
}

export type LoadRejected = {
  type: "LOAD+",
  payload: {
    userId: number,
  },
}

export type Send = {
  type: "SEND",
  payload: {
    user: string,
    action: ServerAction,
  },
}

export type Remove = {
  type: "REMOVE",
  payload: {
    userId: number,
  },
}

export type Action =
  | UserAction
  | Register
  | Load
  | LoadFulfilled
  | LoadRejected
  | Send
  | Remove

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
  registerUser(username: string, password: string, userId: number) {
    return {
      type: actionTypes.REGISTER,
      payload: {
        username,
        password,
        userId,
      },
    }
  },
  loadUser(userId: number) {
    return {
      type: actionTypes.LOAD,
      payload: {
        userId,
      },
    }
  },
  fulfillLoad(userId: number) {
    return {
      type: actionTypes.LOAD_FULFILLED,
      payload: {
        userId,
      },
    }
  },
  rejectLoad(userId: number, err: Error) {
    return {
      type: actionTypes.LOAD_REJECTED,
      payload: {
        userId,
        err,
      },
    }
  },
  send(userId: number, action: ServerAction) {
    return {
      type: actionTypes.SEND,
      payload: {
        userId,
        action,
      },
    }
  },
  remove(userId: number) {
    return {
      type: actionTypes.REMOVE,
      payload: {
        userId,
      },
    }
  },
}

function reducer(state: State, action: Action) {
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
