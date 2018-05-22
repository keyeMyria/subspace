// @flow

import type { ActionsObservable } from "redux-observable"

import { Loop, Users, Physics, getUserBody } from "@subspace/core"

import * as Async from "../../../util/async"

import type { Action, Store, State } from "../../../types"
import type { SpatialIndex } from "../../../cache/types"
import { AdjacentBodies } from "../../modules"

const UPDATE_AREA = 1000
const halfUpdateArea = 0.5 * UPDATE_AREA

async function queryAdjacentBodies(
  state: State,
  index: SpatialIndex,
) {
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
      .then(res => res.map(([, bodyId]) => bodyId))

    return results
  }, {})

  return await Async.object(query)
}

export default function(index: SpatialIndex) {
  function query($action: ActionsObservable<Action>, store: Store) {
    return $action
      .ofType(Loop.TICK)
      .map(() => queryAdjacentBodies(store.getState(), index))
      .mapTo(result => AdjacentBodies.update(result))
  }

  function insert($action: ActionsObservable<Action>, store: Store) {
    return $action
      .ofType(Physics.ADD_BODY)
      .do(({ payload: { body: { position, id } } }) =>
        index.insert(position, id),
      )
      .ignoreElements()
  }

  function update($action: ActionsObservable<Action>, store: Store) {
    return $action
      .ofType(Physics.UPDATE_BODY)
      .do(({ payload: { body: { position, id } } }) =>
        index.update(position, id),
      )
      .ignoreElements()
  }

  return [query, insert, update]
}
