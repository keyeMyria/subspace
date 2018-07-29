// @flow

import type { Connection, UdpServer } from "@web-udp/server"

import { Auth, Protocol } from "@subspace/core"

import type { Middleware } from "../../../types"
import type { AuthClient } from "../../../auth"

import { Users } from "../../modules"
import { handleUserAction } from "./handlers"

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

      const userId = user.id

      if (!userId) {
        return
      }

      connectionsByUserId[userId] = connection

      dispatch(Users.addUser(user))

      // Route user actions to store
      connection.messages.subscribe(message => {
        const actionToReceive = Protocol.deserialize(message)

        try {
          dispatch(handleUserAction(userId, actionToReceive))
        } catch (err) {
          // console.error(err)
        }
      })

      // Remove users on disconnect
      connection.closed.subscribe(() =>
        dispatch(Users.removeUser(userId)),
      )
    })

    return next => action => {
      switch (action.type) {
        case Users.SEND:
          const { userId, actions } = action.payload
          const connection = connectionsByUserId[userId]

          if (!connection) {
            break
          }

          connection.send(Protocol.serialize(actions))
        default:
          break
      }
      return next(action)
    }
  }
}
