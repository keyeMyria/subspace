import { Client as UdpClient } from "@web-udp/client"
import { Observable, ReplaySubject, merge } from "rxjs"
import {
  map,
  switchMap,
  takeUntil,
  ignoreElements,
  tap,
  withLatestFrom,
} from "rxjs/operators"
import { ofType } from "redux-observable"
import { Protocol, WebUdpConnectionSubject } from "@subspace/core"

import { Auth, Udp } from "../../modules"

const stateHandlers = {
  [WebUdpConnectionSubject.OPEN]: Udp.fulfillConnect,
  [WebUdpConnectionSubject.CLOSED]: Udp.close,
}

const client = new UdpClient({
  url: `ws://${window.location.host}/server`,
})
// Observable that provides the UDP connection with local messages
const outgoing$ = ReplaySubject.create()

export function connect(action$, state$) {
  return action$.pipe(
    ofType(Udp.CONNECT),
    withLatestFrom(state$),
    switchMap(([action, state]) =>
      // Create a UDP connection and exchange auth info during handshake
      client.connect("__MASTER__", {
        metadata: {
          token: Auth.getToken(state),
        },
      }),
    ),
    switchMap(connection => {
      const { status, messages } = WebUdpConnectionSubject.make(
        outgoing$,
        connection,
      )

      return merge(
        // Emit actions when the connection state changes
        status.pipe(map(state => stateHandlers[state]())),
        // Handle messages until connection closes
        messages.pipe(
          // Apply mutations from server
          map(Protocol.deserialize),
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
    tap(action => outgoing$.next(Protocol.serialize(action.payload))),
    // Stop sending messages once connection closes
    takeUntil(action$.pipe(ofType(Udp.CLOSE))),
    // No-op
    ignoreElements(),
  )
}

export default [connect, send]
