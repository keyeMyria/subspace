// @flow

import type { Middleware } from "redux"

import type { Scheduler } from "../types/scheduler"
import type { Action } from "../actions"
import type { State } from "../store"

export const createLoopMiddleware = (schedule: Scheduler) => {
  const loop: Middleware<State, Action> = store => next => action => {
    switch (action.type) {
      case "INIT":
        store.dispatch({
          type: "TICK",
          dt: 0,
        })
        break
      case "TICK":
        schedule(dt => {
          store.dispatch({
            type: "TICK",
            dt,
          })
        })
        break
      default:
        break
    }

    return next(action)
  }

  return loop
}
