// @flow

import type { Action } from "./action-types"

export type State = {}

const initialState: State = {}

export default function reducer(
  state: State = initialState,
  action: Action,
) {
  return state
}
