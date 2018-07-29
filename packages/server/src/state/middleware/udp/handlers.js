// @flow

import { Ships } from "@subspace/core"

import type { Action } from "../../../types"

export function handleUserAction(userId: string, action: Action) {
  const { type } = action

  switch (type) {
    case Ships.THRUST:
    case Ships.THRUST_END:
    case Ships.THRUST_REVERSE:
    case Ships.THRUST_REVERSE_END:
    case Ships.TURN_LEFT:
    case Ships.TURN_LEFT_END:
    case Ships.TURN_RIGHT:
    case Ships.TURN_RIGHT_END:
      // action.payload.shipId = action.payload.shipId
      return action
    default:
      throw new Error(`Action type ${type} not recognized`)
  }
}
