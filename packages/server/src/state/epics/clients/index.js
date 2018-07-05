// @flow

import type { Observable } from "rxjs"
import type { ActionObservable } from "redux-observable"
import type { Connection, UdpServer } from "@web-udp/server"

import shortid from "shortid"
import { Protocol } from "@subspace/core"
import { ReplaySubject } from "rxjs"
import { tap, ignoreElements, withLatestFrom } from "rxjs/operators"
import { ofType } from "redux-observable"

import type { Action, State } from "../../../types"
import type { AuthClient } from "../../../auth"

import { Clients } from "../../modules"

export default function(udp: UdpServer, auth: AuthClient) {
  const connections = {}

  function connect(action$: ActionObservable<Action>) {
    const out$ = new ReplaySubject()

    function listen(connection: Connection, clientId: string) {
      // Remove client from store on connection close
      connection.closed.subscribe(() =>
        out$.next(Clients.remove(clientId)),
      )
      // Subscribe to client messages
      connection.messages.subscribe(data => {
        const message = Protocol.deserialize(data)
        const [type] = message

        switch (type) {
          default:
            return console.error(`Unrecognized message type ${type}`)
        }
      })
    }

    async function onConnection(connection: Connection) {
      let user
      const { id } = connection

      try {
        user = await auth.verify(connection.metadata.token)
      } catch (err) {
        console.error(
          `Invalid credentials for connection ${connection.id}`,
        )
        connection.send(
          Protocol.serialize(Protocol.authTokenInvalidMessage()),
        )
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

      listen(connection, clientId)
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
        const { clientId, message } = action.payload
        const { connectionId } = Clients.getClient(state, clientId)

        connections[connectionId].send(Protocol.serialize(message))
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
        const { connectionId } = Clients.getClient(state, clientId)

        connections[connectionId].close()
        delete connections[connectionId]
      }),
      ignoreElements(),
    )
  }

  return [connect, send, remove]
}
