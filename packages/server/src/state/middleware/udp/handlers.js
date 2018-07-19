// @flow

import { Ships } from "@subspace/core"

import type { Action } from "../../../types"

export function handleUserAction(userId: string, action: Action) {
  const { type } = action

  switch (type) {
    case Ships.THRUST_START:
    case Ships.THRUST_END:
      // action.payload.shipId = action.payload.shipId
      return action
    default:
      throw new Error(`Action type ${type} not recognized`)
  }
}
