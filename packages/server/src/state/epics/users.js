// @flow

import type { Observable } from "rxjs"
import type { ActionsObservable } from "redux-observable"

import { Loop, Physics } from "@subspace/core"
import { ofType } from "redux-observable"
// $FlowFixMe
import { from } from "rxjs"
import {
  throttleTime,
  map,
  switchMap,
  withLatestFrom,
  filter,
} from "rxjs/operators"

import type { Action, State } from "../../types"
import type { Db } from "../../data"

import { SpatialIndex, Ships, Users } from "../modules"

export default function(db: Db, sendRate: number) {
  function getSnapshots(state: State) {
    const adjacentBodiesByUserId = SpatialIndex.getAdjacentBodies(
      state,
    )
    const userIds = Object.keys(Users.getUsers(state))

    return userIds.map(userId => {
      const adjacentBodies = adjacentBodiesByUserId[userId] || []
      const bodies = adjacentBodies.map(bodyId =>
        Physics.getBody(state, bodyId),
      )
      const message = Physics.applySnapshot(
        Loop.getFrame(state),
        bodies,
      )

      return Users.send(userId, message)
    })
  }

  function sendSnapshots(
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

  function sendUserUpdates(action$: ActionsObservable<Action>) {
    return action$.pipe(
      ofType(Users.ADD, Users.UPDATE),
      map(([action]) => {
        const { payload: { user } } = action

        return Users.send(user.id, action)
      }),
    )
  }

  function loadUserShips(action$: ActionsObservable<Action>) {
    return action$.pipe(
      ofType(Users.ADD),
      map(action => {
        const { activeShipId } = action.payload
        return Ships.load(activeShipId)
      }),
    )
  }

  function sendUserShips(action$: ActionsObservable<Action>) {
    return action$.pipe(
      ofType(Ships.LOAD_FULFILLED),
      filter(action => action.payload.ship.userId),
      map(action => {
        const { ship } = action.payload
        return Users.send(ship.userId, Ships.addShip(ship))
      }),
    )
  }

  return [
    loadUserShips,
    sendSnapshots,
    sendUserUpdates,
    sendUserShips,
  ]
}
