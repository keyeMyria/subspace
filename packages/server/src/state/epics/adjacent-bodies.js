// @flow

import type { Observable } from "rxjs"
import type { ActionsObservable } from "redux-observable"
import type { Redimension } from "@subspace/redimension"

import { ofType } from "redux-observable"
import {
  map,
  tap,
  ignoreElements,
  withLatestFrom,
  switchMap,
} from "rxjs/operators"
import { Loop, Users, Physics, getUserBody } from "@subspace/core"

import * as AsyncUtil from "../../util/async"

import type { Action, State } from "../../types"
import { SpatialIndex } from "../modules"

const UPDATE_AREA = 1000
const halfUpdateArea = 0.5 * UPDATE_AREA

async function querySpatialIndex(state: State, index: Redimension) {
  const users = Users.getUsers(state)
  const userIds = Object.keys(users)
  const query = userIds.reduce((results, userId) => {
    const body = getUserBody(state, Number(userId))

    if (body === null) {
      return results
    }

    const { position: [x, y] } = body
    const range = [
      [x - halfUpdateArea, x + halfUpdateArea],
      [y - halfUpdateArea, y + halfUpdateArea],
    ]

    results[userId] = index
      .query(range)
      .then(values => values.map(([, bodyId]) => bodyId))

    return results
  }, {})

  return await AsyncUtil.object(query)
}

export default function(index: Redimension) {
  function query(
    $action: ActionsObservable<Action>,
    state$: Observable<State>,
  ) {
    return $action.pipe(
      ofType(Loop.TICK),
      withLatestFrom(state$),
      switchMap(([, state]) => querySpatialIndex(state, index)),
      map(result => SpatialIndex.update(result)),
    )
  }

  function insert($action: ActionsObservable<Action>) {
    return $action.pipe(
      ofType(Physics.ADD_BODY),
      tap(action => {
        const { position, id } = action.body.payload

        index.insert(position, id)
      }),
      ignoreElements(),
    )
  }

  function update($action: ActionsObservable<Action>) {
    return $action.pipe(
      ofType(Physics.UPDATE_BODY),
      tap(action => {
        const { position, id } = action.body.payload

        index.update(position, id)
      }),
      ignoreElements(),
    )
  }

  return [query, insert, update]
}
