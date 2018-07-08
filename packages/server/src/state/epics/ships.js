// @flow

import type { ActionObservable } from "redux-observable"

// $FlowFixMe
import { Observable, from, empty } from "rxjs"
import {
  switchMap,
  tap,
  ignoreElements,
  withLatestFrom,
} from "rxjs/operators"
import { ofType } from "redux-observable"
import { Physics } from "@subspace/core"

import type { Db } from "../../data"
import type { Action, State } from "../../types"
import { Ships, Users } from "../modules"

export default function(db: Db) {
  // Persist ships to database
  function persistShips(action$: ActionObservable<Action>) {
    return action$.pipe(
      ofType(Ships.ADD, Ships.UPDATE),
      tap(async action => {
        const { ship } = action.payload
        const model = await db.Ship.findById(ship.id)

        if (!model) {
          await db.Ship.create(ship)
        } else {
          await model.update(ship)
        }
      }),
      ignoreElements(),
    )
  }

  // Create ship bodies
  function createShipBodies(action$: ActionObservable<Action>) {
    return action$.pipe(
      ofType(Ships.ADD),
      switchMap(async action => {
        const spec = {
          angle: 0,
          angularVelocity: 0,
          mass: 1,
          position: [0, 0],
          velocity: [0, 0],
          width: 2,
          height: 3,
        }
        const { ship: { id: shipId, bodyId } } = action.payload
        const shipModel = await db.Ship.findById(shipId)

        if (!shipModel) {
          return empty()
        }

        const bodyModel = bodyId
          ? await db.Body.findById(bodyId)
          : await db.Body.create(spec)

        if (!bodyModel) {
          return empty()
        }

        const body = bodyModel.toJSON()
        const ship = (await shipModel.update({
          bodyId: body.id,
        })).toJSON()

        return [Physics.addBody(body), Ships.update(ship)]
      }),
      switchMap(actions => from(actions)),
    )
  }

  // Send new and updated ships to clients
  function sendShipUpdates(
    action$: ActionObservable<Action>,
    state$: Observable<State>,
  ) {
    return action$.pipe(
      ofType(Ships.ADD, Ships.UPDATE, Ships.REMOVE),
      withLatestFrom(state$),
      switchMap(([action, state]) => {
        const actions = Users.getUserIds(state).map(userId =>
          Users.send(userId, action),
        )

        return from(actions)
      }),
    )
  }

  function unloadShips(action$: ActionObservable<Action>) {
    return action$.pipe(
      ofType(Ships.REMOVE),
      switchMap(async action => {
        const { shipId } = action.payload
        const model = await db.Ship.findById(shipId)

        if (!model) {
          return empty()
        }

        const { bodyId } = model.toJSON()

        if (bodyId) {
          return Physics.removeBody(bodyId)
        }

        return empty()
      }),
    )
  }

  return [
    persistShips,
    sendShipUpdates,
    createShipBodies,
    unloadShips,
  ]
}
