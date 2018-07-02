// @flow

import { ofType } from "redux-observable"
import { map } from "rxjs/operators"
import type { ActionsObservable } from "redux-observable"

import type { Store } from "../../../types"
import { TURN_DIRECTION } from "../../../model"
import { Ships, Physics } from "../../modules"
import { getShipBody } from "../../selectors"

export function turnShip(action$: ActionsObservable, store: Store) {
  return action$.pipe(
    ofType(Ships.TURN),
    map(({ payload: { shipId, direction } }) => {
      const body = getShipBody(store.getState(), shipId)

      if (!body) {
        throw new Error(`Ship ${shipId} does not have a body`)
      }

      return Physics.rotateBody(
        body.id,
        direction === TURN_DIRECTION.left ? 0.05 : -0.05,
      )
    }),
  )
}

export default [turnShip]
