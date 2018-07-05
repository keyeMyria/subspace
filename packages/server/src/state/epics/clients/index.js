// @flow

import type { ActionObservable } from "redux-observable"
import type { Connection, UdpServer } from "@web-udp/server"

import shortid from "shortid"
import { Protocol } from "@subspace/core"
// $FlowFixMe
import { Observable, ReplaySubject, empty } from "rxjs"
import {
  map,
  tap,
  ignoreElements,
  withLatestFrom,
  catchError,
} from "rxjs/operators"
import { ofType } from "redux-observable"
import { Auth, WebUdpConnectionSubject } from "@subspace/core"

import type { Action, State } from "../../../types"
import type { AuthClient } from "../../../auth"

import { Clients, Users } from "../../modules"

export default function(udp: UdpServer, auth: AuthClient) {
  const connections = {}

  function connect(
    action$: ActionObservable<Action>,
    state$: Observable<State>,
  ) {
    const out$ = new ReplaySubject()
    const clientMessage$ = new ReplaySubject()

    clientMessage$
      .pipe(
        withLatestFrom(state$),
        map(([[clientId, action], state]) => {
          const { type } = action
          const { userId } = Clients.getClient(state, clientId)

          switch (type) {
            case Users.JOIN:
              return Users.loadUser(userId)
            default:
              throw new Error(`Action type ${type} not recognized`)
          }
        }),
        catchError(() => empty()),
      )
      .subscribe(out$)

    async function onConnection(connection: Connection) {
      let user
      const { id } = connection

      try {
        user = await auth.verify(connection.metadata.token)
      } catch (err) {
        console.error(
          `Invalid credentials for connection ${connection.id}`,
        )
        connection.send(Protocol.serialize(Auth.tokenInvalid()))
        connection.close()
        return
      }

      const clientId = shortid()

      connections[id] = connection

      if (!user.id) {
        return
      }

      out$.next(
        Clients.add({
          id: clientId,
          userId: user.id,
          connectionId: id,
        }),
      )

      const { messages, status } = WebUdpConnectionSubject.make(
        connection,
      )

      messages
        .pipe(map(action => [clientId, action]))
        .subscribe(clientMessage$)
    }

    udp.connections.subscribe(onConnection)

    return out$
  }

  function send(
    action$: ActionObservable<Action>,
    state$: Observable<State>,
  ) {
    return action$.pipe(
      ofType(Clients.SEND),
      withLatestFrom(state$),
      tap(([action, state]) => {
        const { clientId, action: actionToSend } = action.payload
        const client = Clients.getClient(state, clientId)

        if (!client) {
          return
        }

        connections[client.connectionId].send(
          Protocol.serialize(actionToSend),
        )
      }),
      ignoreElements(),
    )
  }

  function remove(
    action$: ActionObservable<Action>,
    state$: Observable<State>,
  ) {
    return action$.pipe(
      ofType(Clients.REMOVE),
      withLatestFrom(state$),
      tap(([action, state]) => {
        const { clientId } = action.payload
        const client = Clients.getClient(state, clientId)

        if (!client) {
          return
        }

        connections[client.connectionId].close()
        delete connections[client.connectionId]
      }),
      ignoreElements(),
    )
  }

  return [connect, send, remove]
}
