// @flow

import { toAsync } from "@subspace/core"

export const REGISTER = "REGISTER"

export type Register = {
  type: "REGISTER",
  payload: {
    clientId: string,
    username: string,
    password: string,
  },
}

export const [LOAD, LOAD_FULFILLED, LOAD_REJECTED] = toAsync("LOAD")

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

export type Action = Register | Load | LoadFulfilled | LoadRejected
export default { REGISTER, LOAD, LOAD_FULFILLED, LOAD_REJECTED }
