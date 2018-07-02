// @flow

import type { User } from "../../../model"

export const ADD = "ADD"
export type Add = {
  type: "ADD",
  payload: {
    user: User,
  },
}

export const UPDATE = "UPDATE"
export type Update = {
  type: "UPDATE",
  payload: {
    user: User,
  },
}

export default { ADD, UPDATE }
export type Action = Add | Update
