// @flow

import type { AuthMessage } from "./auth"
import type { PlayerMessage } from "./player"
import type { SnapshotMessage } from "./snapshot"
import type { ShipMessage } from "./ship"

export * from "./message-types"

export * from "./auth"
export * from "./player"
export * from "./ship"
export * from "./snapshot"

export type ServerMessage =
  | AuthMessage
  | PlayerMessage
  | SnapshotMessage
  | ShipMessage
