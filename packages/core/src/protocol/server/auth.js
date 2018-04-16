// @flow

import type { MessageTypeAuthTokenInvalid } from "./message-types"
import { MESSAGE_TYPE_AUTH_TOKEN_INVALID } from "./message-types"

export type AuthTokenInvalidMessage = [MessageTypeAuthTokenInvalid]

export type AuthMessage = AuthTokenInvalidMessage

export const authTokenInvalidMessage = (): AuthTokenInvalidMessage => [
  MESSAGE_TYPE_AUTH_TOKEN_INVALID,
]
