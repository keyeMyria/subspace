// @flow

import type { Observable } from "rxjs"

// $FlowFixMe
import { from } from "rxjs"
import { switchMap } from "rxjs/operators"
import { ofType } from "redux-observable"

import type { Action, State } from "../../types"
import { Ships, Physics, Loop } from "../modules"
import { getShipBody } from "../selectors"

export default function() {
  function sendPhysicsActions(
    action$: Observable<Action>,
    state$: Observable<State>,
  ) {
    return action$.pipe(
      ofType(Loop.TICK),
      switchMap(() => {
        // $FlowFixMe
        const state = state$.value
        const actions = Object.values(Ships.getShips(state)).reduce(
          (actions: Action[], ship: any) => {
            const {
              thrust: [thrust, retroThrust],
              turn: [turnLeft, turnRight],
            } = ship
            const body = getShipBody(state, ship.id)

            if (body && body.id) {
              const turn = turnLeft - turnRight

              if (thrust + retroThrust !== 0) {
                actions.push(Physics.applyForce(body.id, ship.thrust))
              }

              if (turn !== 0) {
                actions.push(Physics.rotateBody(body.id, turn))
              }
            }

            return actions
          },
          [],
        )

        return from(actions)
      }),
    )
  }

  return [sendPhysicsActions]
}
