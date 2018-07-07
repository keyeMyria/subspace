// @flow

import type { ActionObservable } from "redux-observable"

// $FlowFixMe
import { from } from "rxjs"
import { switchMap, tap, ignoreElements } from "rxjs/operators"
import { ofType } from "redux-observable"

import type { Db } from "../../data"
import type { Action } from "../../types"
import { Ships } from "../modules"

export default function(db: Db) {
  function syncShips(action$: ActionObservable<Action>) {
    return action$.pipe(
      ofType(Ships.ADD, Ships.UPDATE),
      tap(async action => {
        const { ship } = action.payload
        const model = await db.Ship.findById(ship.id)

        if (model) {
          return model.update(ship)
        }

        return db.Ship.create(ship)
      }),
      ignoreElements(),
    )
  }

  function loadShips(action$: ActionObservable<Action>) {
    return action$.pipe(
      ofType(Ships.LOAD),
      switchMap(async action => {
        const { shipId } = action.payload
        const model = await db.Ship.findById(shipId)

        if (!model) {
          return Ships.rejectLoad(
            shipId,
            new Error(`Ship ${shipId} not found`),
          )
        }

        const ship = model.toJSON()

        return from([Ships.fulfillLoad(ship)])
      }),
    )
  }

  return [loadShips, syncShips]
}
