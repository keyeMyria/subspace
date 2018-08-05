// @flow

import type { Observable } from "rxjs"
// $FlowFixMe
import { animationFrameScheduler, interval } from "rxjs"
import { switchMap, map } from "rxjs/operators"
import { ofType } from "redux-observable"

import type { Action } from "../../types"
import { Loop } from "../modules"

export default function() {
  function loop(action$: Observable<Action>) {
    return action$.pipe(
      ofType(Loop.START),
      switchMap(
        action =>
          typeof requestAnimationFrame === "function"
            ? interval(0, animationFrameScheduler)
            : interval(action.payload.rate),
      ),
      map(Loop.tick),
    )
  }

  return [loop]
}
