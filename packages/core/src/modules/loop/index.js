// @flow

import type { Dispatch } from "redux"

import type { Action, Middleware } from "../../types"

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

export type LoopAction = LoopStart | LoopTick | LoopPause

// Action creators

export function startLoop(): LoopStart {
  return {
    type: LOOP_START,
  }
}

export function tickLoop(dt: number): LoopTick {
  return {
    type: LOOP_TICK,
    payload: { dt },
  }
}

export function pauseLoop(): LoopPause {
  return {
    type: LOOP_PAUSE,
  }
}

// Reducer

export type LoopState = {
  frame: number,
  running: boolean,
}

const initialState = {
  frame: -1,
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
      return { ...state, frame: state.frame + 1 }
    case LOOP_PAUSE:
      return { ...state, running: false }
    default:
      return state
  }
}

// Middleware

export function createMiddleware(schedule: Scheduler): Middleware {
  return store => {
    const loop = async (dt: number = 0) => {
      const { loop: { running } } = store.getState()

      if (running) {
        store.dispatch(tickLoop(dt))
        await schedule()
        loop()
      }
    }

    return next => action => {
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
