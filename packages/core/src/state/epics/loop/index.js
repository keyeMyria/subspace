// @flow

import type { ActionObservable } from "redux-observable"
import { interval } from "rxjs/observable/interval"

import type { Action } from "../../../types"
import { Loop } from "../../modules"

export function loop(action$: ActionObservable<Action>) {
  return action$
    .ofType(Loop.START)
    .switchMap(() => interval(1 / 60))
    .mapTo(Loop.tick)
    .takeUntil(action$.ofType(Loop.PAUSE))
}

export default [loop]
