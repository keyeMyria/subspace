// @flow

import type { AuthMessage } from "./auth"
import type { InputMessage } from "./input"

export * from "./message-types"

export * from "./input"

export type ClientMessage = AuthMessage | InputMessage
