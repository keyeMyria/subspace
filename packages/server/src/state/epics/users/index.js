// @flow

import { Loop, Physics, Protocol } from "@subspace/core"
import { ofType } from "redux-observable"
import type { ActionsObservable } from "redux-observable"
import { from } from "rxjs/observable/from"
import { of } from "rxjs/observable/of"
import { interval } from "rxjs/observable/interval"
import { fromPromise } from "rxjs/observable/fromPromise"
import {
  throttleTime,
  mapTo,
  tap,
  map,
  switchMap,
  catchError,
} from "rxjs/operators"

import type { Action, State, Store } from "../../../types"
import type { Db } from "../../../data"
import { AdjacentBodies, Clients, Ships, Users } from "../../modules"

export default function(db: Db, sendRate: number) {
  function getSnapshots(state: State) {
    const { adjacentBodies, clients, users, physics, loop } = state

    const adjacentBodiesByUserId = AdjacentBodies.getAdjacentBodies(
      state,
    )

    const userIds = Object.keys(Users.getUsers(users))

    return userIds.map(userId => {
      const id = Number(userId)
      const client = Clients.getClientByUserId(state, id)
      const bodies = adjacentBodiesByUserId[id].map(bodyId =>
        Physics.getBody(physics, bodyId),
      )
      const message = Protocol.snapshotMessage(loop.frame, bodies)

      return Clients.send(client.id, message)
    })
  }

  function snapshots(
    action$: ActionsObservable<Action>,
    store: Store,
  ) {
    return action$.pipe(
      ofType(Loop.TICK),
      throttleTime(sendRate),
      switchMap(() => {
        const snapshots = getSnapshots(store.getState())

        return from(snapshots)
      }),
    )
  }

  function loadUser(
    action$: ActionsObservable<Action>,
    store: Store,
  ) {
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

  function sendUser(
    action$: ActionsObservable<Action>,
    store: Store,
  ) {
    return action$.pipe(
      ofType(Users.ADD, Users.UPDATE),
      mapTo(action => {
        const { payload: { user } } = action
        const client = Clients.getClientByUserId(
          store.getState(),
          user.id,
        )

        return Clients.send(client.id, action)
      }),
    )
  }

  return [snapshots, loadUser, sendUser]
}
