// @flow

import type { Observable } from "rxjs"

// $FlowFixMe
import { of, from } from "rxjs"
import { switchMap } from "rxjs/operators"
import { ofType } from "redux-observable"

import type { Action, State } from "../../types"
import { TURN_DIRECTION } from "../../model"
import { Ships, Physics, Loop } from "../modules"
import { getShipBody } from "../selectors"

export default function() {
  function thrustShips(
    action$: Observable<Action>,
    state$: Observable<State>,
  ) {
    return action$.pipe(
      ofType(Loop.TICK),
      switchMap(() => {
        // $FlowFixMe
        const state = state$.value
        const actions = Object.values(Ships.getShips(state)).reduce(
          (actions, ship: any) => {
            const { thrust: [thrustX, thrustY] } = ship
            const body = getShipBody(state, ship.id)

            if (!body || !body.id || thrustX + thrustY === 0) {
              return actions
            }

            return [
              ...actions,
              Physics.applyForce(body.id, ship.thrust),
            ]
          },
          [],
        )

        return from(actions)
      }),
    )
  }

  function turnShips(action$: Observable<Action>) {
    return action$.pipe(
      ofType(Ships.TURN),
      switchMap(action => {
        // $FlowFixMe
        const state = state$.value
        const { payload: { shipId, direction } } = action
        const body = getShipBody(state, shipId)

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

  return [thrustShips, turnShips]
}
