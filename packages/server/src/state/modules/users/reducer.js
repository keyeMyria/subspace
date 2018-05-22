// @flow

import type { UserState as CoreUserState } from "@subspace/core"
import { Users as CoreUsers } from "@subspace/core"

import type { Action, Dispatch, Middleware } from "../../../types"

export type UserState = $Supertype<CoreUserState>

export default function reducer(state: UserState, action: Action) {
  return CoreUsers(state, action)
}
