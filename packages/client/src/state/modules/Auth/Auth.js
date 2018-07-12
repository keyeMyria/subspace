// @flow

import type { User } from "@subspace/core"

import type { Action } from "../../../types"

import {
  createReduxModule,
  composeReduxModules,
} from "@subspace/redux-module"

import { Auth, toAsync } from "@subspace/core"

type State = {
  user: ?User,
  token: ?string,
}

const [
  AUTHENTICATE,
  AUTHENTICATE_FULFILLED,
  AUTHENTICATE_REJECTED,
] = toAsync("AUTHENTICATE")

const [REGISTER, REGISTER_FULFILLED, REGISTER_REJECTED] = toAsync(
  "REGISTER",
)

const [LOGIN, LOGIN_FULFILLED, LOGIN_REJECTED] = toAsync("LOGIN")

const actionTypes = {
  AUTHENTICATE,
  AUTHENTICATE_FULFILLED,
  AUTHENTICATE_REJECTED,
  REGISTER,
  REGISTER_FULFILLED,
  REGISTER_REJECTED,
  LOGIN,
  LOGIN_FULFILLED,
  LOGIN_REJECTED,
  LOGOUT: "LOGOUT",
  TOKEN_REMOVED: "TOKEN_REMOVED",
}

const actionCreators = {
  authenticate(token) {
    return {
      type: AUTHENTICATE,
      payload: {
        token,
      },
    }
  },
  fulfillAuthenticate(user, token) {
    return {
      type: AUTHENTICATE_FULFILLED,
      payload: {
        token,
        user,
      },
    }
  },
}

function reducer(
  state: State = {
    user: null,
    token: null,
  },
  action: Action,
) {
  switch (action.type) {
    case actionTypes.LOGIN_FULFILLED:
    case actionTypes.REGISTER_FULFILLED:
    case actionTypes.AUTHENTICATE_FULFILLED:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      }
    case actionTypes.LOGOUT:
      return {
        ...state,
        user: null,
        token: null,
      }
    default:
      return state
  }
}

const selectors = {
  getUser(state) {
    return state.user
  },
  getToken(state) {
    return state.token
  },
  isAuthenticated(state) {
    return selectors.getUser(state) && selectors.getToken(state)
  },
}

export default composeReduxModules(
  Auth,
  createReduxModule("Auth", {
    reducer,
    actionCreators,
    actionTypes,
    selectors,
  }),
)
