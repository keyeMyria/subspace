import {
  AUTHENTICATE,
  AUTHENTICATE_FULFILLED,
  AUTHENTICATE_REJECTED,
  REGISTER,
  REGISTER_FULFILLED,
  REGISTER_REJECTED,
  LOGIN,
  LOGIN_FULFILLED,
  LOGIN_REJECTED,
  LOGOUT,
  TOKEN_REMOVED,
} from "./action-types"

export function authenticate(token) {
  return {
    type: AUTHENTICATE,
    payload: {
      token,
    },
  }
}

export function fulfillAuthenticate(user, token) {
  return {
    type: AUTHENTICATE_FULFILLED,
    payload: {
      token,
      user,
    },
  }
}

export function rejectAuthenticate() {
  return {
    type: AUTHENTICATE_REJECTED,
  }
}

export function register(username, password) {
  return {
    type: REGISTER,
    payload: {
      username,
      password,
    },
  }
}

export function fulfillRegister(user, token) {
  return {
    type: REGISTER_FULFILLED,
    payload: {
      token,
      user,
    },
  }
}

export function rejectRegister() {
  return {
    type: REGISTER_REJECTED,
  }
}

export function login(username, password) {
  return {
    type: LOGIN,
    payload: {
      username,
      password,
    },
  }
}

export function fulfillLogin(user, token) {
  return {
    type: LOGIN_FULFILLED,
    payload: {
      token,
      user,
    },
  }
}

export function rejectLogin() {
  return {
    type: LOGIN_REJECTED,
  }
}

export function logout() {
  return {
    type: LOGOUT,
  }
}

export function removeToken() {
  return {
    type: TOKEN_REMOVED,
  }
}
