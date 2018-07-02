// @flow

import { Ships } from "@subspace/core"
import type { ShipState } from "@subspace/core"

import type { Action } from "./action-types"

export type State = ShipState & {}

export default function reducer(state: State, action: Action) {
  return state
}
