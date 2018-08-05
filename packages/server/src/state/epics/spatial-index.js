// @flow

import type { Observable } from "rxjs"
import type { Redimension } from "@subspace/redimension"

import { ofType } from "redux-observable"
import {
  map,
  tap,
  ignoreElements,
  withLatestFrom,
  switchMap,
  throttleTime,
} from "rxjs/operators"
import { Loop, Users, Physics, getUserBody } from "@subspace/core"

import * as AsyncUtil from "../../util/async"

import type { Action, State } from "../../types"
import { SpatialIndex } from "../modules"

const UPDATE_REGION = 1000
const extractBodyIds = values => values.map(([, bodyId]) => bodyId)

async function queryRedimension(state: State, index: Redimension) {
  const users = Users.getUsers(state)
  const query = {}

  for (let userId in users) {
    const body = getUserBody(state, userId)

    if (body === null) {
      continue
    }

    const [x, y] = body.position
    const range = [
      [x - UPDATE_REGION, x + UPDATE_REGION],
      [y - UPDATE_REGION, y + UPDATE_REGION],
    ]

    query[userId] = index.query(range).then(extractBodyIds)
  }

  return AsyncUtil.object(query)
}

export default function(index: Redimension) {
  // Update spatial index with state of bodies in Redimension
  function applyIndexUpdates(
    action$: Observable<Action>,
    state$: Observable<State>,
  ) {
    return action$.pipe(
      ofType(Loop.TICK),
      withLatestFrom(state$),
      throttleTime(1000),
      switchMap(([, state]) => queryRedimension(state, index)),
      map(SpatialIndex.update),
    )
  }

  // Insert new bodies in Redimension
  function insertBodies(action$: Observable<Action>) {
    return action$.pipe(
      ofType(Physics.ADD_BODY),
      tap(action => {
        const { position, id } = action.payload.body

        index.insert(position, id)
      }),
      ignoreElements(),
    )
  }

  // Insert new bodies in Redimension
  function removeBodies(action$: Observable<Action>) {
    return action$.pipe(
      ofType(Physics.REMOVE_BODY),
      tap(action => {
        const { bodyId } = action.payload

        index.removeById(bodyId)
      }),
      ignoreElements(),
    )
  }

  // Update changed bodies in Redimension
  function updateBodies(action$: Observable<Action>) {
    return action$.pipe(
      ofType(Physics.UPDATE_BODY),
      tap(action => {
        const { position, id } = action.payload.body

        index.update(position, id)
      }),
      ignoreElements(),
    )
  }

  return [applyIndexUpdates, insertBodies, removeBodies, updateBodies]
}
