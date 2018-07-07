// @flow

import type { ActionObservable } from "redux-observable"
// $FlowFixMe
import { interval } from "rxjs"
import { switchMap, map } from "rxjs/operators"
import { ofType } from "redux-observable"

import type { Action } from "../../../types"
import { Loop } from "../../modules"

export default function() {
  function loop(action$: ActionObservable<Action>) {
    return action$.pipe(
      ofType(Loop.START),
      switchMap(() => interval(1 / 60)),
      map(Loop.tick),
    )
  }

  return [loop]
}
