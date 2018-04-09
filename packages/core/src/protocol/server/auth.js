// @flow

import type { MessageTypeAuthLoginFailure } from "./message-types"
import { MESSAGE_TYPE_AUTH_LOGIN_FAILURE } from "./message-types"

export type AuthLoginFailureMessage = [MessageTypeAuthLoginFailure]

export type AuthMessage = AuthLoginFailureMessage

export const authLoginFailureMessage = (): AuthLoginFailureMessage => [
  MESSAGE_TYPE_AUTH_LOGIN_FAILURE,
]
