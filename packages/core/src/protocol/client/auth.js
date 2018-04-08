// @flow

import type { AuthCredentials } from "../../model"
import type { MessageTypeAuthLogin } from "./message-types"
import { MESSAGE_TYPE_AUTH_LOGIN } from "./message-types"

export type AuthLoginMessage = [MessageTypeAuthLogin, AuthCredentials]

export type AuthMessage = AuthLoginMessage

export const authLogin = (
  credentials: AuthCredentials,
): AuthLoginMessage => [MESSAGE_TYPE_AUTH_LOGIN, credentials]
