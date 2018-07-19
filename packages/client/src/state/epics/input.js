// @flow

import type { Observable } from "rxjs"

import type { State, Action } from "../../types"

import { ofType } from "redux-observable"
// $FlowFixMe
import { fromEvent, merge, empty, of } from "rxjs"
import {
  distinctUntilChanged,
  groupBy,
  map,
  switchMap,
  mergeAll,
  withLatestFrom,
} from "rxjs/operators"
import { getUserShip, Ships } from "@subspace/core"

import { Auth, Input, Udp } from "../modules"

const input$ = merge(
  fromEvent(document, "keydown"),
  fromEvent(document, "keyup"),
).pipe(
  groupBy(e => e.keyCode),
  // $FlowFixMe
  map(group => group.pipe(distinctUntilChanged(null, e => e.type))),
  mergeAll(),
)

export default function() {
  function handleUserInput(
    action$: Observable<Action>,
    state$: Observable<State>,
  ) {
    return input$.pipe(
      withLatestFrom(state$),
      switchMap(([e, state]) => {
        const actionType = Input.getKeybinding(state, e.key, e.type)
        const user = Auth.getUser(state)

        if (!user || !user.id || !actionType) {
          return empty()
        }

        const ship = getUserShip(state, user.id)

        if (!ship || !ship.id) {
          return empty()
        }

        return of({
          type: actionType,
          payload: {
            shipId: ship.id,
          },
        })
      }),
    )
  }

  function sendUserInput(action$: Observable<Action>) {
    return action$.pipe(
      ofType(Ships.THRUST_START, Ships.THRUST_END),
      map(Udp.send),
    )
  }

  return [handleUserInput, sendUserInput]
}
