// @flow

import shortid from "shortid"
import { Users as CoreUsers, Protocol } from "@subspace/core"

import type { Connection, Server as UdpServer } from "@web-udp/server"
import type {
  AuthCredentials,
  User,
  UserId,
  ServerMessage,
} from "@subspace/core"
import * as Users from "../users"
import type { Action, Middleware } from "../../types"
import type { ClientId, Client } from "../../model/client"
import type { AuthClient } from "../../auth"

// Actions

export const CLIENT_ADD = "client/add"
export type ClientAdd = {
  type: "client/add",
  payload: {
    client: Client,
  },
}

export const CLIENT_SEND = "client/send!"
export type ClientSend = {
  type: "client/send!",
  payload: {
    clientId: ClientId,
    message: ServerMessage,
  },
}

export const CLIENT_REMOVE = "client/remove!"
export type ClientRemove = {
  type: "client/remove!",
  payload: {
    clientId: ClientId,
  },
}

export type ClientAction = ClientAdd | ClientSend | ClientRemove

// Action creators

export function addClient(client: Client) {
  return {
    type: CLIENT_ADD,
    payload: {
      client,
    },
  }
}

export function sendClient(
  clientId: ClientId,
  message: ServerMessage,
) {
  return {
    type: CLIENT_SEND,
    payload: {
      clientId,
      message,
    },
  }
}

export function removeClient(clientId: ClientId) {
  return {
    type: CLIENT_REMOVE,
    payload: {
      clientId,
    },
  }
}

// Reducers

export type State = {
  byId: { [ClientId]: Client },
  byUserId: { [UserId]: Client },
}

const initialState = {
  byId: {},
  byUserId: {},
}

export default function reducer(
  state: State = initialState,
  action: Action,
) {
  switch (action.type) {
    case CLIENT_ADD: {
      const { client } = action.payload
      const byId = {
        ...state.byId,
        [client.id]: client,
      }

      let byUserId = state.byUserId

      if (client.userId) {
        byUserId = {
          ...byUserId,
          [client.userId]: client,
        }
      }

      return {
        ...state,
        byId,
        byUserId,
      }
    }
    case CLIENT_REMOVE: {
      const { clientId } = action.payload
      const client = getClient(state, clientId)
      const nextState = { ...state }

      delete nextState.byId[clientId]

      if (client.userId) {
        delete nextState.byUserId[client.userId]
      }

      return nextState
    }
    default:
      return state
  }
}

// Selectors

export const getClient = (state: State, clientId: ClientId) =>
  state.byId[clientId]

export const getClientByUserId = (state: State, userId: UserId) =>
  state.byUserId[userId]

// Middleware

export function createMiddleware(
  udp: UdpServer,
  auth: AuthClient,
): Middleware {
  const connections: { [string]: Connection } = {}

  const listen = (
    connection: Connection,
    clientId: ClientId,
    dispatch: Dispatch,
  ) => {
    // Remove client from store on connection close
    connection.closed.subscribe(() => {
      dispatch(removeClient(clientId))
    })
    // Subscribe to client messages
    connection.messages.subscribe(async data => {
      const message = JSON.parse(data)
      const [type] = message

      switch (type) {
        default:
          return console.error(`Unrecognized message: ${data}`)
      }
    })
  }

  return store => {
    udp.connections.subscribe(async connection => {
      let user

      try {
        user = await auth.verify(connection.metadata.token)
      } catch (err) {
        console.error(
          `Invalid credentials for connection ${connection.id}`,
        )
        connection.send(
          JSON.stringify(Protocol.authTokenInvalidMessage()),
        )
        connection.close()
        return
      }

      const { dispatch } = store
      const clientId = shortid()

      dispatch(
        addClient({
          id: clientId,
          userId: user.id,
          connectionId: connection.id,
        }),
      )

      connections[connection.id] = connection
      listen(connection, clientId, dispatch)
    })

    return next => action => {
      switch (action.type) {
        case CLIENT_SEND: {
          const { clients } = store.getState()
          const { clientId, message } = action.payload
          const { connectionId } = getClient(clients, clientId)

          connections[connectionId].send(JSON.stringify(message))

          break
        }
        case CLIENT_REMOVE: {
          const { clientId } = action.payload
          const { clients } = store.getState()
          const { connectionId } = getClient(clients, clientId)

          connections[connectionId].close()
          delete connections[connectionId]

          break
        }
        default:
          break
      }

      return next(action)
    }
  }
}
