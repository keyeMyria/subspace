// @flow

import type { ActionObservable } from "redux-observable"

// $FlowFixMe
import { Observable, from, empty } from "rxjs"
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
  // Persist new bodies to database
  function persistBodies(action$: ActionObservable<Action>) {
    return action$.pipe(
      ofType(Physics.ADD_BODY),
      tap(async action => {
        const { body } = action.payload
        const model = await db.Body.findById(body.id)

        if (!model) {
          await db.Body.create(body)
        } else {
          await model.update(body)
        }
      }),
      ignoreElements(),
    )
  }

  // Persist body updates to database
  function persistBodyUpdates(action$: ActionObservable<Action>) {
    return action$.pipe(
      ofType(Physics.UPDATE_BODY),
      throttleTime(1 / 10 * 1000),
      tap(async action => {
        const { body } = action.payload
        const model = await db.Body.findById(body.id)

        if (!model) {
          await db.Body.create(body)
        } else {
          await model.update(body)
        }
      }),
      ignoreElements(),
    )
  }

  // Send new and updated bodies to clients
  function sendBodyUpdates(
    action$: ActionObservable<Action>,
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

  return [persistBodies, persistBodyUpdates, sendBodyUpdates]
}
