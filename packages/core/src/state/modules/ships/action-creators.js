// @flow

import type { Ship, TurnDirection } from "../../../model"
import * as ActionTypes from "./action-types"

export function addShip(ship: Ship): ActionTypes.Add {
  return {
    type: ActionTypes.ADD,
    payload: {
      ship,
    },
  }
}

export function update(ship: Ship): ActionTypes.Update {
  return {
    type: ActionTypes.UPDATE,
    payload: {
      ship,
    },
  }
}

export function turnShip(
  shipId: number,
  direction: TurnDirection,
): ActionTypes.Turn {
  return {
    type: ActionTypes.TURN,
    payload: {
      shipId,
      direction,
    },
  }
}

export default { addShip, turnShip, update }
