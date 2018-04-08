// @flow

import type { AuthToken } from "../../model"
import type { AuthMessage } from "./auth"
import type { InputMessage } from "./input"

export * from "./message-types"

export * from "./auth"
export * from "./input"

export type ClientMessage = AuthMessage | [AuthToken, InputMessage]
