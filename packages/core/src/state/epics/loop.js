// @flow

import type { Observable } from "rxjs"
// $FlowFixMe
import { interval } from "rxjs"
import { switchMap, map } from "rxjs/operators"
import { ofType } from "redux-observable"

import type { Action } from "../../types"
import { Loop } from "../modules"

export default function() {
  function loop(action$: Observable<Action>) {
    return action$.pipe(
      ofType(Loop.START),
      switchMap(action => interval(1 / action.payload.rate * 1000)),
      map(Loop.tick),
    )
  }

  return [loop]
}
