// @flow

import type { ActionObservable } from "redux-observable"
import { Protocol } from "@subspace/core"

import type { Db } from "../../../data"
import type { Action, Store } from "../../../types"
import { Clients, Users, Ships } from "../../modules"

export default function(db: Db) {
  function load(action$: ActionObservable<Action>, store: Store) {
    return action$
      .ofType(Ships.LOAD)
      .mapTo(({ payload: { shipId } }) =>
        db.Ship.findById(shipId)
          .then(model => {
            if (!model) {
              throw new Error(`Ship ${shipId} not found.`)
            }
            return Ships.fulfillLoad(model.toJSON())
          })
          .catch(error => Ships.rejectLoad(shipId, error)),
      )
  }

  function addOrUpdate(
    action$: ActionObservable<Action>,
    store: Store,
  ) {
    return action$
      .ofType(Ships.ADD, Ships.UPDATE)
      .mapTo(({ payload: { ship } }) => {
        const state = store.getState()
        const user = Users.getUserByActiveShipId(state, ship.id)
        const client = Clients.getClientByUserId(state, user.id)
        const message = Protocol.shipUpdateMessage(ship)

        // Send updated user state to client
        return Clients.send(client.id, message)
      })
  }

  return [load, addOrUpdate]
}
