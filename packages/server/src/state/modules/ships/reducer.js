// @flow

import { Ships } from "@subspace/core"
import type { ShipState } from "@subspace/core"

import type { Action } from "../../../types"

export type State = $Supertype<ShipState>

export default function reducer(state: ShipState, action: Action) {
  return Ships(state, action)
}
