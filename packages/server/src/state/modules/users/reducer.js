// @flow

import { Users } from "@subspace/core"
import type { UserState } from "@subspace/core"

import type { Action } from "./action-types"

export type State = UserState & {}

export default function reducer(state: State, action: Action) {
  return state
}
