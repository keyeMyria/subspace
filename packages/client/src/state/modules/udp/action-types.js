import { toAsync } from "@subspace/core"

export const [CONNECT, CONNECT_FULFILLED, CONNECT_REJECTED] = toAsync(
  "CONNECT",
)

export const CONNECTING = "CONNECTING"

export const CLOSE = "CLOSE"

export const RECEIVE = "RECEIVE"
