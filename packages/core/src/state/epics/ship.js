// @flow

// $FlowFixMe
import { of } from "rxjs"
import { map } from "rxjs/operators"
import { ofType } from "redux-observable"
import type { ActionsObservable, Observable } from "redux-observable"

import type { Action, State } from "../../types"
import { TURN_DIRECTION } from "../../model"
import { Ships, Physics } from "../modules"
import { getShipBody } from "../selectors"

export default function() {
  function turnShips(
    action$: ActionsObservable<Action>,
    state$: Observable<State>,
  ) {
    return action$.pipe(
      ofType(Ships.TURN),
      map(action => {
        const { payload: { shipId, direction } } = action
        const body = getShipBody(state$.value, shipId)

        if (!body || !body.id) {
          throw new Error(`Ship ${shipId} does not have a body`)
        }

        return of(
          Physics.rotateBody(
            body.id,
            direction === TURN_DIRECTION.left ? 0.05 : -0.05,
          ),
        )
      }),
    )
  }

  return [turnShips]
}
