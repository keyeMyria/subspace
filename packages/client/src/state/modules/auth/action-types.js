import { toAsync } from "../async"

export const [
  AUTHENTICATE,
  AUTHENTICATE_FULFILLED,
  AUTHENTICATE_REJECTED,
] = toAsync("AUTHENTICATE")

export const [
  REGISTER,
  REGISTER_FULFILLED,
  REGISTER_REJECTED,
] = toAsync("REGISTER")

export const [LOGIN, LOGIN_FULFILLED, LOGIN_REJECTED] = toAsync(
  "LOGIN",
)

export const LOGOUT = "LOGOUT"
export const TOKEN_REMOVED = "TOKEN_REMOVED"
