// @flow

import type { Observable } from "rxjs"

import type { State, Action } from "../../types"

import { Client as UdpClient } from "@web-udp/client"
// $FlowFixMe
import { ReplaySubject, merge, from } from "rxjs"
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

import { Auth, Udp } from "../modules"

const stateHandlers = {
  [WebUdpConnectionSubject.OPEN]: Udp.fulfillConnect,
  [WebUdpConnectionSubject.CLOSED]: Udp.close,
}

const client = new UdpClient({
  url: `ws://${window.location.host}/server`,
})
// Observable that provides the UDP connection with local messages
const outgoing$ = new ReplaySubject(3)

let activeConnection

export default function() {
  function connect(
    action$: Observable<Action>,
    state$: Observable<State>,
  ) {
    return action$.pipe(
      ofType(Udp.CONNECT),
      withLatestFrom(state$),
      switchMap(([, state]) =>
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

        activeConnection = connection

        return merge(
          // Emit actions when the connection state changes
          status.pipe(map(state => stateHandlers[state]())),
          // Handle messages until connection closes
          messages.pipe(
            // Apply mutations from server
            switchMap(actions => from(Protocol.deserialize(actions))),
            takeUntil(action$.pipe(ofType(Udp.CLOSE))),
          ),
        )
      }),
    )
  }

  function send(action$: Observable<Action>) {
    return action$.pipe(
      ofType(Udp.SEND),
      // Send messages to the remote connection using the input subject
      tap(action =>
        outgoing$.next(Protocol.serialize(action.payload.actions)),
      ),
      // Stop sending messages once connection closes
      takeUntil(action$.pipe(ofType(Udp.CLOSE))),
      // No-op
      ignoreElements(),
    )
  }

  function close(action$: Observable<Action>) {
    return action$.pipe(
      ofType(Udp.CLOSE),
      tap(() => activeConnection.close()),
      ignoreElements(),
    )
  }

  function closeOnLogout(action$: Observable<Action>) {
    return action$.pipe(ofType(Auth.LOGOUT), map(Udp.close))
  }

  return [connect, send, close, closeOnLogout]
}
