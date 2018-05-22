// @flow

import type { ServerMessage } from "@subspace/core"

import type { Client } from "../../../model/client"
import { ADD, SEND, REMOVE } from "./action-types"

export function add(client: Client) {
  return {
    type: ADD,
    payload: {
      client,
    },
  }
}

export function send(clientId: string, message: ServerMessage) {
  return {
    type: SEND,
    payload: {
      clientId,
      message,
    },
  }
}

export function remove(clientId: string) {
  return {
    type: REMOVE,
    payload: {
      clientId,
    },
  }
}
