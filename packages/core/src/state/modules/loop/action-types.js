// @flow

export const START = "START"
export type Start = {
  type: "START",
}

export const TICK = "TICK"
export type Tick = {
  type: "TICK",
}

export const PAUSE = "PAUSE"
export type Pause = {
  type: "PAUSE",
}

export default { START, TICK, PAUSE }
export type Action = Start | Tick | Pause
