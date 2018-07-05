// @flow

import type { Action as CoreAction } from "@subspace/core"

import type { Client } from "../../../model/client"

export const ADD = "ADD"
export type Add = {
  type: "ADD",
  payload: {
    client: Client,
  },
}

export const SEND = "SEND"
export type Send = {
  type: "SEND",
  payload: {
    clientId: string,
    action: CoreAction,
  },
}

export const REMOVE = "REMOVE"
export type Remove = {
  type: "REMOVE",
  payload: {
    clientId: string,
  },
}

export type Action = Add | Send | Remove
export default { ADD, SEND, REMOVE }
