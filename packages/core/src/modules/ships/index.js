// @flow

import type { Dispatch } from "redux"

import type { Action, GetState } from "../../types"
import type { Ship, ShipId, TurnDirection } from "../../model"
import type { PhysicsDriver } from "../physics/driver"

import { TURN_DIRECTION } from "../../model"
import { getShipBody } from "../../selectors"
import * as Physics from "../physics"

// Actions

export const SHIP_ADD = "ship/add"
export type ShipAdd = {
  type: "ship/add",
  payload: {
    ship: Ship,
  },
}

export const SHIP_TURN = "ship/turn"
export type ShipTurn = {
  type: "ship/turn",
  payload: {
    shipId: ShipId,
    direction: TurnDirection,
  },
}

// Action creators

export const addShip = (ship: Ship): ShipAdd => ({
  type: SHIP_ADD,
  payload: {
    ship,
  },
})

export const turnShip = (
  shipId: ShipId,
  direction: TurnDirection,
): ShipTurn => ({
  type: SHIP_TURN,
  payload: {
    shipId,
    direction,
  },
})

// Reducer

export type ShipState = {
  byId: {
    [ShipId]: Ship,
  },
}

const initialState: ShipState = {
  byId: {},
}

export default function reducer(
  state: ShipState = initialState,
  action: Action,
): ShipState {
  switch (action.type) {
    case SHIP_ADD:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.ship.id]: action.payload.ship,
        },
      }
    default:
      return state
  }
}

// Selectors

export const getShip = (state: ShipState, id: ShipId) => state[id]

// Middleware

export const createMiddleware = (driver: PhysicsDriver) => <
  A: { type: $Subtype<string> },
>(
  store: *,
) => (next: Dispatch<A>) => (action: A) => {
  const result = next(action)

  switch (action.type) {
    case SHIP_ADD: {
      break
    }
    case SHIP_TURN: {
      const { shipId, direction } = action.payload
      const body = getShipBody(store.getState(), shipId)
      const newAngle =
        body.angle +
        (direction === TURN_DIRECTION.left ? 0.05 : -0.05)

      driver
        .rotateBody(body.id, newAngle)
        .then(model =>
          store.dispatch(Physics.updateBody(body.id, model)),
        )
    }
    default:
      break
  }

  return result
}
