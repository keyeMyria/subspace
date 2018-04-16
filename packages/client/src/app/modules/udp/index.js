// @flow

import { Observable } from "rxjs/Observable"
import { ReplaySubject } from "rxjs/ReplaySubject"
import { concat } from "rxjs/operators/concat"
import { Protocol } from "@subspace/core"
import { Client as UdpClient } from "@web-udp/client"

import udpConnection from "../../extensions/subject/web-udp-connection-subject"

// Actions
export const UDP_CONNECT = "udp/CONNECT!"
export type UdpConnect = {
  type: "udp/CONNECT!",
  payload: {
    token: string,
  },
}

export const UDP_CONNECTING = "udp/CONNECTING"
export type UdpConnecting = {
  type: "udp/CONNECTING",
}

export const UDP_CONNECT_FULFILLED = "udp/CONNECT."
export type UdpConnectFulfilled = {
  type: "udp/CONNECT.",
}

export const UDP_CLOSE = "udp/CLOSE"
export type UdpClose = {
  type: "udp/CLOSE",
}

export const UDP_SEND = "udp/UDP_SEND"
export type UdpSend = {
  type: "udp/UDP_SEND",
}

export const UDP_RECEIVE = "udp/UDP_RECEIVE"
export type UdpReceive = {
  type: "udp/UDP_RECEIVE",
}

export type UdpAction =
  | UdpConnect
  | UdpConnectFulfilled
  | UdpSend
  | UdpReceive
  | UdpClose

// Action creators

export function udpConnect(token: string) {
  return {
    type: UDP_CONNECT,
    payload: {
      token,
    },
  }
}

export function udpConnecting() {
  return {
    type: UDP_CONNECTING,
  }
}

export function udpConnectFulfilled() {
  return {
    type: UDP_CONNECT_FULFILLED,
  }
}

export function udpClose() {
  return {
    type: UDP_CLOSE,
  }
}

export function udpSend() {
  return {
    type: UDP_SEND,
  }
}

export function udpReceive(payload: any) {
  return {
    type: UDP_RECEIVE,
    payload,
  }
}

// Reducer

export type State = {
  isConnected: boolean,
}

const initialState: State = {
  isConnected: false,
}

export default function reducer(
  state: State = initialState,
  action: Action,
) {
  switch (action.type) {
    case UDP_CONNECT_FULFILLED:
      return {
        ...state,
        isConnected: true,
      }
    case UDP_CLOSE:
      return {
        ...state,
        isConnected: false,
      }
  }

  return state
}

// Selectors

export function isConnected(state: State) {
  return state.isConnected
}

// Epics

let client = new UdpClient({
  url: `ws://${window.location.host}/server`,
})
let input = ReplaySubject.create()
let connection$ = null

function connect(metadata: any) {
  return udpConnection(input, client, "__MASTER__", metadata)
}

const stateHandlers = [udpConnecting, udpConnectFulfilled, udpClose]

export function udpConnectEpic(action$, store) {
  return action$.ofType(UDP_CONNECT).mergeMap(action => {
    const metadata = { token: store.getState().auth.token }
    const { messages, status } = connect(metadata)

    return Observable.merge(
      status.map(state => stateHandlers[state]()),
      messages
        .map(data => udpReceive(Protocol.deserialize(data)))
        .takeUntil(action$.ofType(UDP_CLOSE)),
    )
  })
}

export function udpSendEpic(action$) {
  return action$
    .ofType(UDP_SEND)
    .do(action => input.next(Protocol.serialize(action.payload)))
    .takeUntil(action$.ofType(UDP_CLOSE))
    .ignoreElements()
}

export const udpEpics = [udpConnectEpic, udpSendEpic]
