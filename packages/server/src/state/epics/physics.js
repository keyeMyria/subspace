// @flow

// $FlowFixMe
import { Observable, from } from "rxjs"
import {
  switchMap,
  tap,
  ignoreElements,
  withLatestFrom,
  throttleTime,
} from "rxjs/operators"
import { ofType } from "redux-observable"
import { Physics } from "@subspace/core"

import type { Db } from "../../data"
import type { Action, State } from "../../types"
import { Users } from "../modules"

export default function(db: Db) {
  function persistSnapshots(action$: Observable<Action>) {
    return action$.pipe(
      ofType(Physics.DRIVER_UPDATE),
      throttleTime(2000),
      tap(async action => {
        const { bodies } = action.payload
        const updates = []

        for (const bodyId in bodies) {
          const { angle, position } = bodies[bodyId]
          updates.push(
            db.Body.update(
              { angle, position },
              { where: { id: bodyId } },
            ),
          )
        }

        return Promise.all(updates)
      }),
      ignoreElements(),
    )
  }

  // Send new and updated bodies to clients
  function sendBodyUpdates(
    action$: Observable<Action>,
    state$: Observable<State>,
  ) {
    return action$.pipe(
      ofType(Physics.ADD_BODY, Physics.REMOVE_BODY),
      withLatestFrom(state$),
      switchMap(([action, state]) => {
        const actions = Users.getUserIds(state).map(userId =>
          Users.send(userId, action),
        )

        return from(actions)
      }),
    )
  }

  return [sendBodyUpdates, persistSnapshots]
}
