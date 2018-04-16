// @flow

import { Observable } from "rxjs/Observable"
import type { User } from "@subspace/core"
import { createSelector } from "reselect"

import * as API from "../../api"
import { ActionTypes } from "../../constants"

const { JWT_STORAGE_KEY } = process.env

// Actions

export const AUTH_LOGIN = "auth/LOGIN!"
export type AuthLogin = {
  type: "auth/LOGIN!",
  payload: {
    username: string,
    password: string,
    resolve: Function,
    reject: Function,
  },
}

export const AUTH_LOGIN_FULFILLED = "auth/LOGIN."
export type AuthLoginFulfilled = {
  type: "auth/LOGIN.",
  payload: {
    token: string,
    user: User,
  },
}

export const AUTH_LOGIN_REJECTED = "auth/LOGIN~"
export type AuthLoginRejected = {
  type: "auth/LOGIN~",
  payload: Error,
  meta: {
    username: string,
  },
  error: true,
}

export const AUTH_REGISTER = "auth/REGISTER!"
export type AuthRegister = {
  type: "auth/REGISTER!",
  payload: {
    username: string,
    password: string,
    resolve: Function,
    reject: Function,
  },
}

export const AUTH_REGISTER_FULFILLED = "auth/REGISTER."
export type AuthRegisterFulfilled = {
  type: "auth/REGISTER.",
  payload: {
    user: User,
    token: string,
  },
}

export const AUTH_REGISTER_REJECTED = "auth/REGISTER~"
export type AuthRegisterRejected = {
  type: "auth/REGISTER~",
  payload: Error,
  meta: {
    username: string,
  },
  error: true,
}

export const AUTH_LOGOUT = "auth/LOGOUT"
export type AuthLogout = {
  type: "auth/LOGOUT",
}

export const AUTH_TOKEN_REMOVED = "auth/TOKEN_REMOVED"
export type AuthTokenRemoved = {
  type: "auth/TOKEN_REMOVED",
}

export const AUTH_AUTHENTICATE = "auth/AUTHENTICATE!"
export type AuthAuthenticate = {
  type: "auth/AUTHENTICATE!",
  payload: {
    token: string,
  },
}

export const AUTH_AUTHENTICATE_FULFILLED = "auth/AUTHENTICATE."
export type AuthAuthenticateFulfilled = {
  type: "auth/AUTHENTICATE.",
  payload: {
    user: User,
    token: String,
  },
}

export const AUTH_AUTHENTICATE_REJECTED = "auth/AUTHENTICATE~"
export type AuthAuthenticateRejected = {
  type: "auth/AUTHENTICATE~",
  payload: Error,
  error: true,
  meta: {
    token: string,
  },
}

export type AuthAction =
  | AuthLogin
  | AuthLoginFulfilled
  | AuthLoginRejected
  | AuthRegister
  | AuthRegisterFulfilled
  | AuthRegisterRejected
  | AuthLogout
  | AuthTokenRemoved
  | AuthAuthenticate
  | AuthAuthenticateFulfilled
  | AuthAuthenticateRejected

// Action creators

export function login(
  username: string,
  password: string,
  resolve: Function,
  reject: Function,
): AuthLogin {
  return {
    type: AUTH_LOGIN,
    payload: {
      username,
      password,
      resolve,
      reject,
    },
  }
}

export function loginFulfilled(
  user: User,
  token: string,
): AuthLoginRejected {
  return {
    type: AUTH_LOGIN_FULFILLED,
    payload: {
      token,
      user,
    },
  }
}

export function loginRejected(
  username: string,
  error: Error,
): AuthLoginRejected {
  return {
    type: AUTH_LOGIN_REJECTED,
    payload: error,
    meta: {
      username,
    },
    error: true,
  }
}

export function register(
  username: string,
  password: string,
  resolve: Function,
  reject: Function,
): AuthRegister {
  return {
    type: AUTH_REGISTER,
    payload: {
      username,
      password,
      resolve,
      reject,
    },
  }
}

export function registerFulfilled(
  user: User,
  token: string,
): AuthRegisterFulfilled {
  return {
    type: AUTH_REGISTER_FULFILLED,
    payload: {
      user,
      token,
    },
  }
}

export function registerRejected(
  username: string,
  error: Error,
): AuthRegisterRejected {
  return {
    type: AUTH_REGISTER_REJECTED,
    payload: error,
    meta: {
      username,
    },
    error: true,
  }
}
export function logout(): AuthLogout {
  return {
    type: AUTH_LOGOUT,
  }
}

export function tokenRemoved(): AuthTokenRemoved {
  return {
    type: AUTH_TOKEN_REMOVED,
  }
}

export function authenticate(token: string): AuthAuthenticate {
  return {
    type: AUTH_AUTHENTICATE,
    payload: {
      token,
    },
  }
}

export function authenticateFulfilled(
  user: User,
  token: string,
): AuthAuthenticateFulfilled {
  return {
    type: AUTH_AUTHENTICATE_FULFILLED,
    payload: {
      user,
      token,
    },
  }
}

export function authenticateRejected(
  token: string,
  error: Error,
): AuthAuthenticateRejected {
  return {
    type: AUTH_AUTHENTICATE_REJECTED,
    payload: error,
    meta: {
      token,
    },
    error: true,
  }
}

// Reducer

type AuthState = {
  user?: User,
  token?: string,
}

const initialState: AuthState = {
  user: null,
  token: null,
}

export default function authReducer(
  prevState: AuthState = initialState,
  action: Action,
) {
  switch (action.type) {
    case AUTH_LOGIN_FULFILLED:
    case AUTH_REGISTER_FULFILLED:
    case AUTH_AUTHENTICATE_FULFILLED:
      return {
        ...prevState,
        user: action.payload.user,
        token: action.payload.token,
      }
    case AUTH_LOGOUT:
      return {
        ...prevState,
        user: null,
        token: null,
      }
    default:
      return prevState
  }
}

// Selectors

export function getUser(state: AuthState) {
  return state.user
}

export function getToken(state: AuthState) {
  return state.token
}

export const isAuthenticated = createSelector(
  getUser,
  getToken,
  (user, token) => !!user && !!token,
)

// Epics

export function loginEpic(action$) {
  return action$.ofType(AUTH_LOGIN).switchMap(action =>
    API.login(action.payload.username, action.payload.password)
      .map(res => loginFulfilled(res.user, res.token))
      .do(loginAction => {
        action.payload.resolve()

        localStorage.setItem(
          JWT_STORAGE_KEY,
          loginAction.payload.token,
        )
      })
      .catch(error => {
        action.payload.reject()

        return Observable.of(
          loginRejected(error, action.payload.username),
        )
      }),
  )
}

export function registerEpic(action$) {
  return action$.ofType(AUTH_REGISTER).switchMap(action =>
    API.register(action.payload.username, action.payload.password)
      .map(res => registerFulfilled(res.user, res.token))
      .do(registerAction => {
        action.payload.resolve()

        localStorage.setItem(
          JWT_STORAGE_KEY,
          registerAction.payload.token,
        )
      })
      .catch(error => {
        action.payload.reject()

        return Observable.of(
          registerRejected(error, action.payload.username),
        )
      }),
  )
}

export function logoutEpic(action$) {
  return action$
    .ofType(AUTH_LOGOUT)
    .do(() => localStorage.removeItem(JWT_STORAGE_KEY))
    .map(() => tokenRemoved())
}

export function authenticateEpic(action$) {
  return action$.ofType(AUTH_AUTHENTICATE).switchMap(action =>
    API.authenticate(action.payload.token)
      .map(res => authenticateFulfilled(res.user, res.token))
      .do(authenticateAction =>
        localStorage.setItem(
          JWT_STORAGE_KEY,
          authenticateAction.payload.token,
        ),
      )
      .catch(error => {
        localStorage.removeItem(JWT_STORAGE_KEY)

        return Observable.of(authenticateRejected(error))
      }),
  )
}

export const authEpics = [
  loginEpic,
  registerEpic,
  logoutEpic,
  authenticateEpic,
]
