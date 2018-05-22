// @flow

import type { Start, Tick, Pause } from "./action-types"
import { START, TICK, PAUSE } from "./action-types"

export function start(): Start {
  return {
    type: START,
  }
}

export function tick(dt: number): Tick {
  return {
    type: TICK,
    payload: { dt },
  }
}

export function pause(): Pause {
  return {
    type: PAUSE,
  }
}
