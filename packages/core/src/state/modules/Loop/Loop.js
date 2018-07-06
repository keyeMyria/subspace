// @flow

import { createReduxModule } from "@subspace/redux-module"

type State = {
  frame: number,
  running: boolean,
}

type Start = {
  type: "START",
}

type Tick = {
  type: "TICK",
}

type Pause = {
  type: "PAUSE",
}

type Action = Start | Tick | Pause

export type { State as LoopState, Action as LoopAction }

const actionTypes = {
  START: "START",
  TICK: "TICK",
  PAUSE: "PAUSE",
}

const actionCreators = {
  start(): Start {
    return {
      type: actionTypes.START,
    }
  },
  tick(dt: number): Tick {
    return {
      type: actionTypes.TICK,
      payload: { dt },
    }
  },
  pause(): Pause {
    return {
      type: actionTypes.PAUSE,
    }
  },
}

function reducer(
  state: State = { frame: -1, running: false },
  action: Action,
) {
  switch (action.type) {
    case actionTypes.START:
      return { ...state, running: true }
    case actionTypes.TICK:
      return { ...state, frame: state.frame + 1 }
    case actionTypes.PAUSE:
      return { ...state, running: false }
    default:
      return state
  }
}

const selectors = {
  getFrame(state: State) {
    return state.frame
  },
}

export default createReduxModule("Loop", {
  actionTypes,
  actionCreators,
  reducer,
  selectors,
})
