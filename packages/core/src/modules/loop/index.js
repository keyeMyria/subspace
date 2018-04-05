// @flow

import type { Dispatch } from "redux"

import type { Action } from "../../types"

export type Scheduler = () => Promise<number>

// Actions

export const LOOP_START = "loop/start!"
export type LoopStart = {
  type: "loop/start!",
}

export const LOOP_TICK = "loop/tick"
export type LoopTick = {
  type: "loop/tick",
  payload: {
    dt: number,
  },
}

export const LOOP_PAUSE = "loop/pause"
export type LoopPause = {
  type: "loop/pause",
}

// Action creators

export const startLoop = () => ({
  type: LOOP_START,
})

export const tickLoop = (dt: number) => ({
  type: LOOP_TICK,
  payload: { dt },
})

export const pauseLoop = () => ({
  type: LOOP_PAUSE,
})

// Reducer

export type LoopState = {
  tick: number,
  running: boolean,
}

const initialState = {
  tick: -1,
  running: false,
}

export default function reducer(
  state: LoopState = initialState,
  action: Action,
) {
  switch (action.type) {
    case LOOP_START:
      return { ...state, running: true }
    case LOOP_TICK:
      return { ...state, tick: state.tick + 1 }
    case LOOP_PAUSE:
      return { ...state, running: false }
    default:
      return state
  }
}

// Middleware

export const createMiddleware = (schedule: Scheduler) => {
  return <A: { type: $Subtype<string> }>(store: *) => {
    const loop = async (dt: number = 0) => {
      const { loop: { running } } = store.getState()

      if (running) {
        store.dispatch(tickLoop(dt))
        await schedule()
        loop()
      }
    }

    return (next: Dispatch<A>) => (action: A) => {
      const { loop: { running } } = store.getState()
      const result = next(action)

      switch (action.type) {
        case LOOP_START: {
          if (!running) {
            loop()
          }
          break
        }
        default:
          break
      }

      return result
    }
  }
}
