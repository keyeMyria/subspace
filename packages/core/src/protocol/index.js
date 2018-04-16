// @flow

import type { ClientMessage } from "./client"
import type { ServerMessage } from "./server"

export type { ClientMessage, ServerMessage }

export function serialize(data) {
  return JSON.stringify(data)
}

export function deserialize(data) {
  return JSON.parse(data)
}

export * from "./client"
export * from "./server"
