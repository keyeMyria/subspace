// @flow

import { ofType } from "redux-observable"
import { map, switchMap } from "rxjs/operators"
import type { ActionsObservable } from "redux-observable"

import type { PhysicsDriver } from "../../physics"
import { Physics } from "../modules"

export default function(driver: PhysicsDriver) {
  function rotate(action$: ActionsObservable) {
    return action$.pipe(
      ofType(Physics.ROTATE_BODY),
      switchMap(({ payload: { bodyId, angle } }) =>
        driver.rotateBody(bodyId, angle),
      ),
      map(Physics.updateBody),
    )
  }

  return [rotate]
}
