// @flow

import type {
  ShipId,
  Ship,
  ShipState as CoreShipState,
} from "@subspace/core"
import {
  Ships as CoreShips,
  Players as CorePlayers,
  Protocol,
} from "@subspace/core"

import * as Clients from "../clients"
import * as Players from "../players"
import type { Db } from "../../data"
import type { Action, Dispatch, Middleware } from "../../types"

// Actions

export const SHIP_LOAD = "ships/load!"
export type ShipLoad = {
  type: "ships/load!",
  payload: {
    shipId: ShipId,
  },
}

export const SHIP_LOAD_FAILURE = "ships/load_failure"
export type ShipLoadFailure = {
  type: "ships/load_failure",
  payload: {
    shipId: ShipId,
    err: Error,
  },
}

export const SHIP_LOAD_SUCCESS = "ships/load_success"
export type ShipLoadSuccess = {
  type: "ships/load_success",
  payload: {
    ship: Ship,
  },
}

export type ShipAction = ShipLoad | ShipLoadFailure | ShipLoadSuccess

// Action creators

export function loadShip(shipId: ShipId) {
  return {
    type: SHIP_LOAD,
    payload: {
      shipId,
    },
  }
}

export function loadShipFailure(shipId: ShipId, err: Error) {
  return {
    type: SHIP_LOAD_FAILURE,
    payload: {
      shipId,
      err,
    },
  }
}

export function loadShipSuccess(ship: Ship) {
  return {
    type: SHIP_LOAD_SUCCESS,
    payload: {
      ship,
    },
  }
}

// Reducer

export type ShipState = $Supertype<CoreShipState>

export default function reducer(state: ShipState, action: Action) {
  return CoreShips.default(state, action)
}

// Middleware

export function createMiddleware(db: Db): Middleware {
  return store => next => action => {
    switch (action.type) {
      case SHIP_LOAD: {
        const { shipId } = action.payload
        // Hydrate a player from db and create entities if they don't exist
        // (e.g. player ship)
        db.Ship.findById(shipId)
          .then(ship => {
            if (!ship) {
              throw new Error(`Ship ${shipId} not found.`)
            }

            const model = ship.toJSON()

            next(loadShipSuccess(model))
            next(CoreShips.addShip(model))

            if (model.bodyId) {
              // next(Physics.loadBody(model.bodyId))
            }
          })
          .catch(err => next(loadShipFailure(shipId, err)))
        break
      }
      case CoreShips.SHIP_ADD:
      case CoreShips.SHIP_UPDATE: {
        const { clients, players } = store.getState()
        const { ship } = action.payload
        const player = CorePlayers.getPlayerByActiveShipId(
          players,
          ship.id,
        )

        if (!player) {
          break
        }

        const client = Clients.getClientByPlayerId(clients, player.id)
        const message = Protocol.shipUpdateMessage(ship)

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
