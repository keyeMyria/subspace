// @flow

import type { Observable } from "rxjs"

import type { State, Action } from "../../types"

import { ofType } from "redux-observable"
// $FlowFixMe
import { fromEvent, merge, EMPTY, of, interval, zip } from "rxjs"
import {
  distinctUntilChanged,
  groupBy,
  map,
  switchMap,
  mergeAll,
  withLatestFrom,
  bufferTime,
} from "rxjs/operators"
import { Users } from "@subspace/core"

import { Auth, Input, Udp } from "../modules"
import { Game } from "../../cfg"

const serverInterval$ = interval(Game.serverTickRate)
const getCommandApplication = state => {
  const user = Auth.getUser(state)

  if (!user || !user.id) {
    return EMPTY
  }

  const command = Users.getCommandByUserId(state, user.id)

  if (!command) {
    return EMPTY
  }

  return of(Users.applyCommand(command, user.id))
}
const getCommandApplications = (state$: Observable<State>) =>
  serverInterval$.pipe(
    // $FlowFixMe
    withLatestFrom(state$, (_, state) => state),
    switchMap(getCommandApplication),
  )
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
          return EMPTY
        }

        return of({
          type: actionType,
          payload: {
            userId: user.id,
          },
        })
      }),
    )
  }

  function sendUserInput(
    action$: Observable<Action>,
    state$: Observable<State>,
  ) {
    return getCommandApplications(state$).pipe(
      bufferTime(100),
      map(actions => Udp.send(...actions)),
    )
  }

  function applyUserCommands(
    action$: Observable<Action>,
    state$: Observable<State>,
  ) {
    return getCommandApplications(state$)
  }

  return [handleUserInput, sendUserInput, applyUserCommands]
}
