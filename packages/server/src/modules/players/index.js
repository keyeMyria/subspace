// @flow

import type {
  PlayerId,
  PlayerState as CorePlayerState,
} from "@subspace/core"

import {
  Loop,
  Players as CorePlayers,
  Physics,
  Protocol,
} from "@subspace/core"

import * as Ships from "../ships"
import * as Clients from "../clients"
import * as AdjacentBodies from "../adjacent-bodies"
import * as Hrtime from "../../util/hrtime"

import type { Db } from "../../data"
import type { Action, Dispatch, Middleware } from "../../types"

// Actions

export const PLAYER_LOAD = "players/load!"
export type PlayerLoad = {
  type: "players/load!",
  payload: {
    playerId: PlayerId,
  },
}

export const PLAYER_LOAD_FAILURE = "players/load_failure"
export type PlayerLoadFailure = {
  type: "players/load_failure",
  payload: {
    playerId: PlayerId,
    err: Error,
  },
}

export const PLAYER_LOAD_SUCCESS = "players/load_success"
export type PlayerLoadSuccess = {
  type: "players/load_success",
  payload: {
    playerId: PlayerId,
  },
}

export type PlayerAction =
  | PlayerLoad
  | PlayerLoadFailure
  | PlayerLoadSuccess

// Action creators

export function loadPlayer(playerId: PlayerId) {
  return {
    type: PLAYER_LOAD,
    payload: {
      playerId,
    },
  }
}

export function loadPlayerFailure(playerId: PlayerId, err: Error) {
  return {
    type: PLAYER_LOAD_FAILURE,
    payload: {
      playerId,
      err,
    },
  }
}

export function loadPlayerSuccess(playerId: PlayerId) {
  return {
    type: PLAYER_LOAD_SUCCESS,
    payload: {
      playerId,
    },
  }
}

// Reducer

export type PlayerState = $Supertype<CorePlayerState>

export default function reducer(state: PlayerState, action: Action) {
  return CorePlayers.default(state, action)
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
        players,
        physics,
        loop,
      } = store.getState()
      const adjacentBodiesByPlayerId = AdjacentBodies.getAdjacentBodies(
        adjacentBodies,
      )

      for (const playerId in CorePlayers.getPlayers(players)) {
        const id = Number(playerId)
        const client = Clients.getClientByPlayerId(clients, id)
        const bodies = adjacentBodiesByPlayerId[id].map(bodyId =>
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
        case PLAYER_LOAD: {
          const { playerId } = action.payload
          // Hydrate a player from db and create entities if they don't exist
          // (e.g. player ship)
          db.Player.findById(playerId)
            .then(player => {
              if (!player) {
                throw new Error(`Player ${playerId} not found`)
              }

              const model = player.toJSON()

              next(loadPlayerSuccess(playerId))
              next(CorePlayers.addPlayer(model))

              if (model.activeShipId) {
                next(Ships.loadShip(model.activeShipId))
              }
            })
            .catch(e => next(loadPlayerFailure(playerId, e)))
          break
        }
        case CorePlayers.PLAYER_ADD:
        case CorePlayers.PLAYER_UPDATE: {
          const { clients } = store.getState()
          const { player } = action.payload
          const client = Clients.getClientByPlayerId(
            clients,
            player.id,
          )
          const message = Protocol.playerUpdateMessage(player)

          // Send updated player state to client
          store.dispatch(Clients.sendClient(client.id, message))

          break
        }
        default:
          break
      }

      return next(action)
    }
  }
}
