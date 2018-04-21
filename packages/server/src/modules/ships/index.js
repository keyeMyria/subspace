// @flow

import type {
  ShipId,
  Ship,
  ShipState as CoreShipState,
} from "@subspace/core"
import {
  Ships as CoreShips,
  Users as CoreUsers,
  Physics,
  Protocol,
} from "@subspace/core"

import * as Clients from "../clients"
import * as Users from "../users"
import type { Db } from "../../data"
import type { Action, Dispatch, Middleware } from "../../types"

// Actions

export const SHIP_LOAD = "ships/load!"
export type ShipLoad = {
  type: "ships/load!",
  payload: {
    shipId: number,
  },
}

export const SHIP_LOAD_FAILURE = "ships/load_failure"
export type ShipLoadFailure = {
  type: "ships/load_failure",
  payload: {
    shipId: number,
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

export function loadShip(shipId: number) {
  return {
    type: SHIP_LOAD,
    payload: {
      shipId,
    },
  }
}

export function loadShipFailure(shipId: number, err: Error) {
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
        // Hydrate a user from db and create entities if they don't exist
        // (e.g. user ship)
        db.Ship.findById(shipId)
          .then(model => {
            if (!model) {
              throw new Error(`Ship ${shipId} not found.`)
            }

            const ship = model.toJSON()

            next(loadShipSuccess(ship))
            next(CoreShips.addShip(ship))

            if (ship.body) {
              next(Physics.addBody(ship.body))
            }
          })
          .catch(err => next(loadShipFailure(shipId, err)))
        break
      }
      case CoreShips.SHIP_ADD:
      case CoreShips.SHIP_UPDATE: {
        const { clients, users } = store.getState()
        const { ship } = action.payload
        const user = CoreUsers.getUserByActiveShipId(users, ship.id)

        if (!user) {
          break
        }

        const client = Clients.getClientByUserId(clients, user.id)
        const message = Protocol.shipUpdateMessage(ship)

        // Send updated user state to client
        store.dispatch(Clients.sendClient(client.id, message))

        break
      }
      default:
        break
    }

    return next(action)
  }
}
