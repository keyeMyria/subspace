// @flow

import shortid from "shortid"
import { Players as CorePlayers, Protocol } from "@subspace/core"

import type { Connection, Server as UdpServer } from "@web-udp/server"
import type {
  AuthCredentials,
  Player,
  PlayerId,
  ServerMessage,
} from "@subspace/core"
import * as Players from "../players"
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

export const CLIENT_LOGIN = "client/login!"
export type ClientLogin = {
  type: "client/login!",
  payload: {
    clientId: ClientId,
    credentials: AuthCredentials,
  },
}

export const CLIENT_LOGIN_FAILURE = "client/login_failure"
export type ClientLoginFailure = {
  type: "client/login_failure",
  payload: {
    clientId: ClientId,
  },
}

export const CLIENT_LOGIN_SUCCESS = "client/login_success"
export type ClientLoginSuccess = {
  type: "client/login_success",
  payload: {
    clientId: ClientId,
    player: Player,
  },
}

export const CLIENT_SET_PLAYER = "client/set_player"
export type ClientSetPlayer = {
  type: "client/set_player",
  payload: {
    clientId: ClientId,
    playerId: PlayerId,
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

export type ClientAction =
  | ClientAdd
  | ClientLogin
  | ClientLoginFailure
  | ClientLoginSuccess
  | ClientSetPlayer
  | ClientSend
  | ClientRemove

// Action creators

export function addClient(client: Client) {
  return {
    type: CLIENT_ADD,
    payload: {
      client,
    },
  }
}

export function loginClient(
  clientId: ClientId,
  credentials: AuthCredentials,
) {
  return {
    type: CLIENT_LOGIN,
    payload: {
      clientId,
      credentials,
    },
  }
}

export function loginClientFailure(clientId: ClientId) {
  return {
    type: CLIENT_LOGIN_FAILURE,
    payload: {
      clientId,
    },
  }
}

export function loginClientSuccess(
  clientId: ClientId,
  player: Player,
) {
  return {
    type: CLIENT_LOGIN_SUCCESS,
    payload: {
      clientId,
      player,
    },
  }
}

export function setClientPlayer(
  clientId: ClientId,
  playerId: PlayerId,
) {
  return {
    type: CLIENT_SET_PLAYER,
    payload: {
      clientId,
      playerId,
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
  byPlayerId: { [PlayerId]: Client },
}

const initialState = {
  byId: {},
  byPlayerId: {},
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

      let byPlayerId = state.byPlayerId

      if (client.playerId) {
        byPlayerId = {
          ...byPlayerId,
          [client.playerId]: client,
        }
      }

      return {
        ...state,
        byId,
        byPlayerId,
      }
    }
    case CLIENT_SET_PLAYER: {
      const { clientId, playerId } = action.payload
      const client = { ...getClient(state, clientId), playerId }

      return {
        ...state,
        byId: {
          ...state.byId,
          [clientId]: client,
        },
        byPlayerId: {
          ...state.byPlayerId,
          [playerId]: client,
        },
      }
    }
    case CLIENT_REMOVE: {
      const { clientId } = action.payload
      const client = getClient(state, clientId)
      const nextState = { ...state }

      delete nextState.byId[clientId]

      if (client.playerId) {
        delete nextState.byPlayerId[client.playerId]
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

export const getClientByPlayerId = (
  state: State,
  playerId: PlayerId,
) => state.byPlayerId[playerId]

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
    connection.messages.subscribe(async data => {
      const message = JSON.parse(data)
      const [, [type, payload]] = message

      if (type === Protocol.MESSAGE_TYPE_AUTH_LOGIN) {
        return dispatch(loginClient(clientId, payload))
      }

      if (!await auth.check(message)) {
        return console.error(
          `Client ${clientId} is not authenticated`,
        )
      }

      switch (type) {
        default:
          return console.error(`Unrecognized message: ${data}`)
      }
    })
  }

  return store => {
    udp.connections.subscribe(connection => {
      const { dispatch } = store
      const clientId = shortid()

      connections[connection.id] = connection
      listen(connection, clientId, dispatch)
      dispatch(
        addClient({ id: clientId, connectionId: connection.id }),
      )
    })

    return next => action => {
      switch (action.type) {
        case CLIENT_LOGIN: {
          const { clientId, credentials } = action.payload

          auth
            .login(credentials)
            .then(player => {
              next(loginClientSuccess(clientId, player))
            })
            .catch(err => {
              next(loginClientFailure(clientId))
            })

          break
        }
        case CLIENT_LOGIN_SUCCESS: {
          const { clientId, player } = action.payload
          const state = store.getState()

          if (CorePlayers.getPlayer(state.players, player.id)) {
            next(removeClient(clientId))
            return
          }

          next(setClientPlayer(clientId, player.id))
          next(Players.loadPlayer(player.id))
          break
        }
        case CLIENT_LOGIN_FAILURE: {
          const { clientId } = action.payload

          next(
            sendClient(clientId, Protocol.authLoginFailureMessage()),
          )
          break
        }
        case CLIENT_SEND: {
          const { clients } = store.getState()
          const { clientId, message } = action.payload
          const client = getClient(clients, clientId)

          connections[client.connectionId].send(
            JSON.stringify(message),
          )

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
