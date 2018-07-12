// @flow

import type { User } from "@subspace/core"

import {
  createReduxModule,
  composeReduxModules,
} from "@subspace/redux-module"

import { Auth } from "@subspace/core"

type State = {
  user: ?User,
  token: ?string,
}

type Authenticate = {
  type: "AUTHENTICATE",
  payload: {
    token: string,
  },
}

type FulfillAuthenticate = {
  type: "AUTHENTICATE+",
  payload: {
    token: string,
    user: User,
  },
}

type RejectAuthenticate = {
  type: "AUTHENTICATE-",
  payload: {},
}

type Register = {
  type: "REGISTER",
  payload: {
    username: string,
    password: string,
  },
}

type FulfillRegister = {
  type: "REGISTER+",
  payload: {
    token: string,
    user: User,
  },
}

type RejectRegister = {
  type: "REGISTER-",
  payload: {},
}

type Login = {
  type: "LOGIN",
  payload: {
    username: string,
    password: string,
  },
}

type FulfillLogin = {
  type: "LOGIN+",
  payload: {
    token: string,
    user: User,
  },
}

type RejectLogin = {
  type: "LOGIN-",
  payload: {},
}

type Logout = {
  type: "LOGOUT",
  payload: {},
}

type RemoveToken = {
  type: "TOKEN_REMOVED",
  payload: {},
}

type Action =
  | Authenticate
  | FulfillAuthenticate
  | RejectAuthenticate
  | Register
  | FulfillRegister
  | RejectRegister
  | Login
  | FulfillLogin
  | RejectLogin
  | Logout
  | RemoveToken

export type { State as AuthState, Action as AuthAction }

const actionTypes = {
  AUTHENTICATE: "AUTHENTICATE",
  AUTHENTICATE_FULFILLED: "AUTHENTICATE+",
  AUTHENTICATE_REJECTED: "AUTHENTICATE-",
  REGISTER: "REGISTER",
  REGISTER_FULFILLED: "REGISTER+",
  REGISTER_REJECTED: "REGISTER-",
  LOGIN: "LOGIN",
  LOGIN_FULFILLED: "LOGIN+",
  LOGIN_REJECTED: "LOGIN-",
  LOGOUT: "LOGOUT",
  TOKEN_REMOVED: "TOKEN_REMOVED",
}

const actionCreators = {
  authenticate(token): Authenticate {
    return {
      type: actionTypes.AUTHENTICATE,
      payload: {
        token,
      },
    }
  },
  fulfillAuthenticate(user, token): FulfillAuthenticate {
    return {
      type: actionTypes.AUTHENTICATE_FULFILLED,
      payload: {
        token,
        user,
      },
    }
  },
  rejectAuthenticate(): RejectAuthenticate {
    return {
      type: actionTypes.AUTHENTICATE_REJECTED,
      payload: {},
    }
  },
  register(username, password): Register {
    return {
      type: actionTypes.REGISTER,
      payload: {
        username,
        password,
      },
    }
  },
  fulfillRegister(user, token): FulfillRegister {
    return {
      type: actionTypes.REGISTER_FULFILLED,
      payload: {
        token,
        user,
      },
    }
  },
  rejectRegister(): RejectRegister {
    return {
      type: actionTypes.REGISTER_REJECTED,
      payload: {},
    }
  },
  login(username, password): Login {
    return {
      type: actionTypes.LOGIN,
      payload: {
        username,
        password,
      },
    }
  },
  fulfillLogin(user, token): FulfillLogin {
    return {
      type: actionTypes.LOGIN_FULFILLED,
      payload: {
        token,
        user,
      },
    }
  },
  rejectLogin(): RejectLogin {
    return {
      type: actionTypes.LOGIN_REJECTED,
      payload: {},
    }
  },
  logout(): Logout {
    return {
      type: actionTypes.LOGOUT,
      payload: {},
    }
  },
  removeToken(): RemoveToken {
    return {
      type: actionTypes.TOKEN_REMOVED,
      payload: {},
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
