// @flow

import type { Scheduler } from "./types/scheduler"

import { createStore } from "./store"

type GameOptions = {
  scheduler: Scheduler,
}

export const createGame = (options: GameOptions) => {
  return createStore()
}
