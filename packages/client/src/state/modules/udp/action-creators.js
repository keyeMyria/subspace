import {
  CONNECT,
  CONNECTING,
  CONNECT_FULFILLED,
  CONNECT_REJECTED,
  CLOSE,
  RECEIVE,
} from "./action-types"

export function connect(token) {
  return {
    type: CONNECT,
    payload: {
      token,
    },
  }
}

export function connecting() {
  return {
    type: CONNECTING,
  }
}

export function fulfillConnect() {
  return {
    type: CONNECT_FULFILLED,
  }
}

export function rejectConnect() {
  return {
    type: CONNECT_REJECTED,
  }
}

export function close() {
  return {
    type: CLOSE,
  }
}
