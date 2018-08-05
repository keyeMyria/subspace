// @flow

import type { Observable } from "rxjs"

// $FlowFixMe
import { from, empty } from "rxjs"
import { switchMap, withLatestFrom } from "rxjs/operators"
import { ofType } from "redux-observable"

import type { Action, State } from "../../types"
import { Ships, Physics, Users } from "../modules"
import { getShipBody, getUserShip } from "../selectors"

export default function() {
  function mapUserCommandToPhysicsActions(
    action$: Observable<Action>,
    state$: Observable<State>,
  ) {
    return action$.pipe(
      ofType(Users.APPLY_COMMAND),
      withLatestFrom(state$),
      switchMap(([action, state]) => {
        const { command, userId } = action.payload
        const ship = getUserShip(state, userId)
        const actions = []

        if (!(ship && ship.id)) {
          return empty()
        }

        const shipId = ship.id
        const body = getShipBody(state, ship.id)

        if (!(body && body.id)) {
          return empty()
        }

        const bodyId = body.id
        const thrust =
          (+command.thrust - +command.thrustReverse) *
          Ships.getShipThrust(state, shipId)
        const turn = (+command.turnLeft - +command.turnRight) * 0.05

        if (thrust !== 0) {
          actions.push(Physics.applyForce(bodyId, [0, thrust]))
        }

        if (turn !== 0) {
          actions.push(Physics.rotateBody(bodyId, turn))
        }

        return from(actions)
      }),
    )
  }

  return [mapUserCommandToPhysicsActions]
}
