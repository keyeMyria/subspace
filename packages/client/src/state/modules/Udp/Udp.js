// @flow

import { createReduxModule } from "@subspace/redux-module"

type State = { isConnected: boolean }

type Connect = {
  type: "CONNECT",
  payload: {
    token: string,
  },
}

type Connecting = {
  type: "CONNECTING",
  payload: {},
}

type FulfillConnect = {
  type: "CONNECT+",
  payload: {},
}

type RejectConnect = {
  type: "CONNECT-",
  payload: {},
}

type Close = {
  type: "CLOSE",
  payload: {},
}

type Action =
  | Connect
  | Connecting
  | FulfillConnect
  | RejectConnect
  | Close

export type { State as UdpState, Action as UdpAction }

const actionTypes = {
  CONNECT: "CONNECT",
  CONNECT_FULFILLED: "CONNECT+",
  CONNECT_REJECTED: "CONNECT-",
  CONNECTING: "CONNECTING",
  CLOSE: "CLOSE",
}

const actionCreators = {
  connect(token): Connect {
    return {
      type: (actionTypes.CONNECT: any),
      payload: {
        token,
      },
    }
  },
  connecting(): Connecting {
    return {
      type: actionTypes.CONNECTING,
      payload: {},
    }
  },
  fulfillConnect(): FulfillConnect {
    return {
      type: (actionTypes.CONNECT_FULFILLED: any),
      payload: {},
    }
  },
  rejectConnect(): RejectConnect {
    return {
      type: (actionTypes.CONNECT_REJECTED: any),
      payload: {},
    }
  },
  close(): Close {
    return {
      type: actionTypes.CLOSE,
      payload: {},
    }
  },
}

const selectors = {}

function reducer(
  state: State = { isConnected: false },
  action: Action,
) {
  switch (action.type) {
    case actionTypes.CONNECT_FULFILLED:
      return {
        ...state,
        isConnected: true,
      }
    case actionTypes.CLOSE:
      return {
        ...state,
        isConnected: false,
      }
  }

  return state
}

export default createReduxModule("Udp", {
  reducer,
  actionCreators,
  actionTypes,
  selectors,
})
