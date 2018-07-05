// @flow

import type { Observable } from "rxjs"
import type { ActionObservable } from "redux-observable"

// $FlowFixMe
import { fromPromise } from "rxjs"
import { map, withLatestFrom } from "rxjs/operators"
import { ofType } from "redux-observable"
import { Protocol } from "@subspace/core"

import type { Db } from "../../../data"
import type { Action, State } from "../../../types"
import { Clients, Users, Ships } from "../../modules"

export default function(db: Db) {
  function load(action$: ActionObservable<Action>) {
    return action$.pipe(
      ofType(Ships.LOAD),
      map(action => {
        const { shipId } = action.payload
        const request = db.Ship.findById(shipId)
          .then(model => {
            if (!model) {
              throw new Error(`Ship ${shipId} not found`)
            }

            return Ships.fulfillLoad(model.toJSON())
          })
          .catch(error => Ships.rejectLoad(shipId, error))

        return fromPromise(request)
      }),
    )
  }

  function addOrUpdate(
    action$: ActionObservable<Action>,
    state$: Observable<State>,
  ) {
    return action$.pipe(
      ofType(Ships.ADD, Ships.UPDATE),
      withLatestFrom(state$),
      map(([action, state]) => {
        const { ship } = action.payload
        const user = Users.getUserByActiveShipId(state, ship.id)
        const client = Clients.getClientByUserId(state, user.id)
        const message = Protocol.shipUpdateMessage(ship)

        // Send updated user state to client
        return Clients.send(client.id, message)
      }),
    )
  }

  return [load, addOrUpdate]
}
