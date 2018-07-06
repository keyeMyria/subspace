// @flow

import type { Observable } from "rxjs"
import type { ActionsObservable } from "redux-observable"

import { Loop, Physics } from "@subspace/core"
import { ofType } from "redux-observable"
// $FlowFixMe
import { from, of, fromPromise } from "rxjs"
import {
  throttleTime,
  map,
  switchMap,
  catchError,
  withLatestFrom,
} from "rxjs/operators"

import type { Action, State } from "../../types"
import type { Db } from "../../data"
import type { User } from "../../model/user"

import { SpatialIndex, Ships, Users } from "../modules"

export default function(db: Db, sendRate: number) {
  function getSnapshots(state: State) {
    const adjacentBodiesByUserId = SpatialIndex.getAdjacentBodies(
      state,
    )
    const userIds = Object.keys(Users.getUsers(state))

    return userIds.map(userId => {
      const id = Number(userId)
      const bodies = adjacentBodiesByUserId[id].map(bodyId =>
        Physics.getBody(state, bodyId),
      )
      const message = Physics.applySnapshot(
        Loop.getFrame(state),
        bodies,
      )

      return Users.send(id, message)
    })
  }

  function snapshots(
    action$: ActionsObservable<Action>,
    state$: Observable<State>,
  ) {
    return action$.pipe(
      ofType(Loop.TICK),
      throttleTime(sendRate),
      withLatestFrom(state$),
      switchMap(([, state]) => from(getSnapshots(state))),
    )
  }

  function loadUser(action$: ActionsObservable<Action>) {
    return action$.pipe(
      ofType(Users.LOAD),
      switchMap(({ payload: { userId } }) =>
        fromPromise(db.User.findById(userId)).pipe(
          map(model => {
            if (!model) {
              throw new Error(`User ${userId} not found`)
            }
            return model.toJSON()
          }),
          catchError(error => of(Users.rejectLoad(userId, error))),
        ),
      ),
      switchMap(user => {
        const next = [Users.fulfillLoad(user)]

        if (user.activeShip) {
          next.push(Ships.addShip(user.activeShip))
        }

        return from(next)
      }),
    )
  }

  function updateUser(
    action$: ActionsObservable<Action>,
    state$: Observable<State>,
  ) {
    return action$.pipe(
      ofType(Users.ADD, Users.UPDATE),
      withLatestFrom(state$),
      map(([action, state]) => {
        const { payload: { user } } = action

        return Users.send(user.id, action)
      }),
    )
  }

  return [snapshots, loadUser, updateUser]
}
