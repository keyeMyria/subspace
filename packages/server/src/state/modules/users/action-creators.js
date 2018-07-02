// @flow

import {
  REGISTER,
  LOAD,
  LOAD_FULFILLED,
  LOAD_REJECTED,
} from "./action-types"

export function registerUser(
  username: string,
  password: string,
  clientId: string,
) {
  return {
    type: REGISTER,
    payload: {
      username,
      password,
      clientId,
    },
  }
}

export function loadUser(userId: number) {
  return {
    type: LOAD,
    payload: {
      userId,
    },
  }
}

export function fulfillLoad(userId: number) {
  return {
    type: LOAD_FULFILLED,
    payload: {
      userId,
    },
  }
}

export function rejectLoad(userId: number, err: Error) {
  return {
    type: LOAD_REJECTED,
    payload: {
      userId,
      err,
    },
  }
}
