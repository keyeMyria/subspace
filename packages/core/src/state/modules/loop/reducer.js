// @flow

import type { Action } from "./action-types"
import { START, TICK, PAUSE } from "./action-types"

export type State = {
  frame: number,
  running: boolean,
}

const initialState = {
  frame: -1,
  running: false,
}

export default function reducer(
  state: State = initialState,
  action: Action,
) {
  switch (action.type) {
    case START:
      return { ...state, running: true }
    case TICK:
      return { ...state, frame: state.frame + 1 }
    case PAUSE:
      return { ...state, running: false }
    default:
      return state
  }
}
