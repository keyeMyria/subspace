// @flow

import type {
  UserId,
  UserState as CoreUserState,
} from "@subspace/core"

import {
  Loop,
  Users as CoreUsers,
  Ships as CoreShips,
  Physics,
  Protocol,
} from "@subspace/core"

import type { ClientId } from "../clients"

import * as Ships from "../ships"
import * as Clients from "../clients"
import * as AdjacentBodies from "../adjacent-bodies"
import * as Hrtime from "../../util/hrtime"

import type { Db } from "../../data"
import type { Action, Dispatch, Middleware } from "../../types"

// Actions

export const USER_REGISTER = "users/register!"
export type UserRegister = {
  type: "users/register!",
  payload: {
    clientId: ClientId,
    username: string,
    password: string,
  },
}

export const USER_LOAD = "users/load!"
export type UserLoad = {
  type: "users/load!",
  payload: {
    userId: UserId,
  },
}

export const USER_LOAD_FAILURE = "users/load_failure"
export type UserLoadFailure = {
  type: "users/load_failure",
  payload: {
    userId: UserId,
    err: Error,
  },
}

export const USER_LOAD_SUCCESS = "users/load_success"
export type UserLoadSuccess = {
  type: "users/load_success",
  payload: {
    userId: UserId,
  },
}

export type UserAction =
  | UserRegister
  | UserLoad
  | UserLoadFailure
  | UserLoadSuccess

// Action creators

export function registerUser(username: string, password: string) {
  return {
    type: USER_REGISTER,
    payload: {
      clientId,
      username,
      password,
    },
  }
}

export function loadUser(userId: UserId) {
  return {
    type: USER_LOAD,
    payload: {
      userId,
    },
  }
}

export function loadUserFailure(userId: UserId, err: Error) {
  return {
    type: USER_LOAD_FAILURE,
    payload: {
      userId,
      err,
    },
  }
}

export function loadUserSuccess(userId: UserId) {
  return {
    type: USER_LOAD_SUCCESS,
    payload: {
      userId,
    },
  }
}

// Reducer

export type UserState = $Supertype<CoreUserState>

export default function reducer(state: UserState, action: Action) {
  return CoreUsers.default(state, action)
}

// Middleware

export function createMiddleware(
  db: Db,
  sendRate: number,
): Middleware {
  return store => {
    const sendStateUpdates = Hrtime.throttle(() => {
      const {
        adjacentBodies,
        clients,
        users,
        physics,
        loop,
      } = store.getState()
      const adjacentBodiesByUserId = AdjacentBodies.getAdjacentBodies(
        adjacentBodies,
      )

      for (const userId in CoreUsers.getUsers(users)) {
        const id = Number(userId)
        const client = Clients.getClientByUserId(clients, id)
        const bodies = adjacentBodiesByUserId[id].map(bodyId =>
          Physics.getBody(physics, bodyId),
        )
        const message = Protocol.snapshotMessage(loop.frame, bodies)

        store.dispatch(Clients.sendClient(client.id, message))
      }
    }, sendRate)

    return next => action => {
      switch (action.type) {
        case Loop.LOOP_TICK: {
          sendStateUpdates()
          break
        }
        case USER_REGISTER: {
          const { clientId, username, password } = action.payload

          db.User.create({ username, password })
            .then(model => {
              const user = model.toJSON()
              const message = Protocol.userRegisterSuccessMessage()

              next(Clients.sendClient(clientId, message))
            })
            .catch(err => {
              const message = Protocol.userRegisterFailureMessage()

              next(Clients.sendClient(clientId, message))
            })
        }
        case USER_LOAD: {
          const { userId } = action.payload
          // Hydrate a user from db and create entities if they don't exist
          // (e.g. user ship)
          db.User.findById(userId)
            .then(model => {
              if (!model) {
                throw new Error(`User ${userId} not found`)
              }

              const user = model.toJSON()

              next(loadUserSuccess(userId))
              next(CoreUsers.addUser(user))

              if (user.activeShip) {
                next(CoreShips.addShip(user.activeShip))
              }
            })
            .catch(e => next(loadUserFailure(userId, e)))
          break
        }
        case CoreUsers.USER_ADD:
        case CoreUsers.USER_UPDATE: {
          const { clients } = store.getState()
          const { user } = action.payload
          const client = Clients.getClientByUserId(clients, user.id)
          const message = Protocol.userUpdateMessage(user)

          // Send updated user state to client
          next(Clients.sendClient(client.id, message))

          break
        }
        default:
          break
      }

      return next(action)
    }
  }
}
