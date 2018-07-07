// @flow

import type { Action } from "../../../types"

import { Users } from "../../modules"

export function handleUserAction(userId: string, action: Action) {
  const { type } = action

  switch (type) {
    case Users.JOIN:
      return Users.loadUser(userId)
    default:
      throw new Error(`Action type ${type} not recognized`)
  }
}
