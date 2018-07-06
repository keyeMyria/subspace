// @flow

import type { Connection, UdpServer } from "@web-udp/server"

import { Auth, Protocol } from "@subspace/core"

import type { Action, Middleware } from "../../types"
import type { AuthClient } from "../../auth"

import { Users } from "../modules"

function applyUserAction(userId: string, action: Action) {
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

      try {
        user = await auth.verify(connection.metadata.token)
      } catch (err) {
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

      // Route user actions to store
      connection.messages.subscribe(message => {
        const actionToReceive = Protocol.deserialize(message)

        try {
          dispatch(applyUserAction(userId, actionToReceive))
        } catch (err) {
          // console.error(err)
        }
      })

      // Remove users on disconnect
      connection.closed.subscribe(() =>
        dispatch(Users.remove(user.id)),
      )
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
