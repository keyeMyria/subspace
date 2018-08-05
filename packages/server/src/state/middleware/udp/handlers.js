// @flow

import { Users } from "@subspace/core"

import type { Action } from "../../../types"

export function handleUserAction(userId: string, action: Action) {
  switch (action.type) {
    case Users.APPLY_COMMAND:
      action.payload.userId = userId
      return action
    default:
      throw new Error(`Action type ${action.type} not recognized`)
  }
}
