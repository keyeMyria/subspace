// @flow

import type { Observable } from "rxjs"

import { ofType } from "redux-observable"
import { tap, map, ignoreElements } from "rxjs/operators"

import type { PhysicsDriver } from "../../physics/types"
import { Physics, Loop } from "../modules"
import type { Action } from "../../types"

export default function(driver: PhysicsDriver) {
  function syncDriverToGameLoop(action$: Observable<Action>) {
    return action$.pipe(
      ofType(Loop.START),
      map(action => Physics.init(action.payload.rate)),
    )
  }

  function applyPhysicsDriverUpdates(action$: Observable<Action>) {
    return action$.pipe(
      ofType(Loop.TICK),
      map(() => Physics.driverUpdate(driver.step())),
    )
  }

  function providePhysicsDriverActions(action$: Observable<Action>) {
    return action$.pipe(
      ofType(
        Physics.INIT,
        Physics.ADD_BODY,
        Physics.APPLY_FORCE,
        Physics.ROTATE_BODY,
        Physics.APPLY_SNAPSHOT,
      ),
      tap(driver.handleAction),
      ignoreElements(),
    )
  }

  return [
    providePhysicsDriverActions,
    applyPhysicsDriverUpdates,
    syncDriverToGameLoop,
  ]
}
