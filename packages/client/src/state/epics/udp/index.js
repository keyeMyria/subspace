import { Client as UdpClient } from "@web-udp/client"
import { Observable, ReplaySubject, merge } from "rxjs"
import {
  map,
  mergeMap,
  takeUntil,
  ignoreElements,
  tap,
} from "rxjs/operators"
import { ofType } from "redux-observable"

import { Auth, Udp } from "../../modules"

import udpConnection, {
  UdpConnectionSubjectStatus,
} from "../../../extensions/subject/web-udp-connection-subject"

const stateHandlers = {
  [UdpConnectionSubjectStatus.CONNECTING]: Udp.connecting,
  [UdpConnectionSubjectStatus.CONNECTED]: Udp.fulfillConnect,
  [UdpConnectionSubjectStatus.CLOSED]: Udp.close,
}

const client = new UdpClient({
  url: `ws://${window.location.host}/server`,
})
// Observable that provides the UDP connection with local messages
const input = ReplaySubject.create()

export function connect(action$, store) {
  return action$.pipe(
    ofType(Udp.CONNECT),
    mergeMap(action => {
      // Create a UDP connection and exchange auth info during handshake
      const metadata = { token: Auth.getToken(store.getState()) }
      const { messages, status } = udpConnection(
        input,
        client,
        "__MASTER__",
        metadata,
      )

      return merge(
        // Emit actions when the connection state changes
        status.pipe(map(state => stateHandlers[state]())),
        // Handle messages until connection closes
        messages.pipe(
          map(data => Udp.receive(JSON.parse(data))),
          takeUntil(action$.pipe(ofType(Udp.CLOSE))),
        ),
      )
    }),
  )
}

export function send(action$) {
  return action$.pipe(
    ofType(Udp.SEND),
    // Send messages to the remote connection using the input subject
    tap(action => input.next(JSON.stringify(action.payload))),
    // Stop sending messages once connection closes
    takeUntil(action$.pipe(ofType(Udp.CLOSE))),
    // No-op
    ignoreElements(),
  )
}

export default [connect, send]
