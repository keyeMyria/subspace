// @flow

import type { Action } from "../../../types"

export function handleUserAction(userId: string, action: Action) {
  const { type } = action

  switch (type) {
    default:
      throw new Error(`Action type ${type} not recognized`)
  }
}
