// @flow

import type { Action as ClientAction } from "../../../types"

import { createReduxModule } from "@subspace/redux-module"

type State = { isConnected: boolean }

type Connect = {
  type: "CONNECT",
  payload: {
    token: string,
  },
}

type FulfillConnect = {
  type: "CONNECT+",
}

type RejectConnect = {
  type: "CONNECT-",
}

type Close = {
  type: "CLOSE",
}

type Send = {
  type: "SEND",
  payload: {
    actions: ClientAction[],
  },
}

type Action = Connect | FulfillConnect | RejectConnect | Close | Send

export type { State as UdpState, Action as UdpAction }

const actionTypes = {
  CONNECT: "CONNECT",
  CONNECT_FULFILLED: "CONNECT+",
  CONNECT_REJECTED: "CONNECT-",
  CLOSE: "CLOSE",
  SEND: "SEND",
}

const actionCreators = {
  connect(token): Connect {
    return {
      type: actionTypes.CONNECT,
      payload: {
        token,
      },
    }
  },
  fulfillConnect(): FulfillConnect {
    return {
      type: actionTypes.CONNECT_FULFILLED,
    }
  },
  rejectConnect(): RejectConnect {
    return {
      type: actionTypes.CONNECT_REJECTED,
    }
  },
  close(): Close {
    return {
      type: actionTypes.CLOSE,
    }
  },
  send(...actions: ClientAction[]): Send {
    return {
      type: actionTypes.SEND,
      payload: {
        actions,
      },
    }
  },
}

const selectors = {
  isConnected(state) {
    return state.isConnected
  },
}

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
