// @flow

import shortid from "shortid"
import type { ActionObservable } from "redux-observable"
import type { Connection, UdpServer } from "@web-udp/server"
import { Protocol } from "@subspace/core"

import type { Action, Store } from "../../../types"
import type { AuthClient } from "../../../auth"
import { Clients } from "../../modules"

export default function(udp: UdpServer, auth: AuthClient) {
  const connections = {}

  function connect(action$: ActionObservable<Action>, store: Store) {
    function listen(connection: Connection, clientId: string) {
      // Remove client from store on connection close
      connection.closed.subscribe(() =>
        store.dispatch(Clients.remove(clientId)),
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

      return action$.ignoreElements()
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

      store.dispatch(
        Clients.add({
          id: clientId,
          userId: user.id,
          connectionId: id,
        }),
      )

      listen(connection, clientId)
    }

    udp.connections.subscribe(onConnection)
  }

  function send(action$: ActionObservable<Action>, store: Store) {
    return action$
      .ofType(Clients.SEND)
      .do(({ payload: { clientId, message } }) => {
        const { connectionId } = Clients.getClient(
          store.getState(),
          clientId,
        )

        connections[connectionId].send(Protocol.serialize(message))
      })
      .ignoreElements()
  }

  function remove(action$: ActionObservable<Action>, store: Store) {
    return action$
      .ofType(Clients.REMOVE)
      .do(({ payload: { clientId } }) => {
        const { connectionId } = Clients.getClient(
          store.getState(),
          clientId,
        )

        connections[connectionId].close()
        delete connections[connectionId]
      })
      .ignoreElements()
  }

  return [connect, send, remove]
}
