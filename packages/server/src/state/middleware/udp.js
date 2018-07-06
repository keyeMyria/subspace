// @flow

import type { Connection, UdpServer } from "@web-udp/server"

import { Auth, Protocol } from "@subspace/core"

import type { Action, Middleware, State } from "../../types"
import type { AuthClient } from "../../auth"

import { Users } from "../modules"

function handleIncoming(
  userId: number,
  action: Action,
  state: State,
) {
  const { type } = action

  switch (type) {
    case Users.JOIN:
      return Users.loadUser(userId)
    default:
      throw new Error(`Action type ${type} not recognized`)
  }
}

export function make(udp: UdpServer, auth: AuthClient): Middleware {
  const connectionsByUserId = {}

  return store => {
    const { dispatch } = store

    udp.connections.subscribe(async (connection: Connection) => {
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

      const { id: userId } = user

      if (!userId) {
        return
      }

      connectionsByUserId[userId] = connection

      dispatch(Users.addUser(user))

      connection.messages.subscribe(message => {
        const state = store.getState()
        const actionToReceive = Protocol.deserialize(message)

        try {
          dispatch(handleIncoming(userId, actionToReceive, state))
        } catch (err) {
          console.error(err)
        }
      })
    })

    return next => action => {
      switch (action.type) {
        case Users.SEND:
          const { userId, action: actionToSend } = action.payload

          connectionsByUserId[userId].send(
            Protocol.serialize(actionToSend),
          )
        default:
          return next(action)
      }
    }
  }
}
