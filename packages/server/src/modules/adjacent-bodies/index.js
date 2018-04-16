// @flow

import { Loop, Users, Physics, getUserBody } from "@subspace/core"

import type { UserId, BodyId } from "@subspace/core"

import * as Async from "../../util/async"

import type { Action, Dispatch, Middleware, State } from "../../types"
import type { SpatialIndex } from "../../cache/types"

const UPDATE_AREA = 1000
const halfUpdateArea = 0.5 * UPDATE_AREA

// Actions

export const ADJACENT_BODIES_UPDATE = "adjacent-bodies/update"
export type AdjacentBodiesUpdate = {
  type: "adjacent-bodies/update",
  payload: {
    adjacentBodies: { [UserId]: BodyId[] },
  },
}

export type AdjacentBodiesAction = AdjacentBodiesUpdate

// Action creators

export function updateAdjacentBodies(adjacentBodies: {
  [UserId]: BodyId[],
}) {
  return {
    type: ADJACENT_BODIES_UPDATE,
    payload: {
      adjacentBodies,
    },
  }
}

// Reducer

export type AdjacentBodiesState = {
  byUserId: { [UserId]: BodyId[] },
}

const initialAdjacentBodiesState = {
  byUserId: {},
}

export default function reducer(
  state: AdjacentBodiesState = initialAdjacentBodiesState,
  action: Action,
) {
  switch (action.type) {
    case ADJACENT_BODIES_UPDATE:
      return {
        ...state,
        byUserId: {
          ...state.byUserId,
          ...action.payload.adjacentBodies,
        },
      }
    default:
      return state
  }
}

// Selectors

export const getAdjacentBodies = (state: AdjacentBodiesState) =>
  state.byUserId

// Middleware

async function queryAdjacentBodies(
  state: State,
  index: SpatialIndex,
) {
  const users = Users.getUsers(state.users)
  const userIds = Object.keys(users)
  const query = userIds.reduce((a, userId) => {
    const body = getUserBody(state, Number(userId))

    if (body === null) {
      return a
    }

    const { position: [x, y] } = body
    const range = [
      [x - halfUpdateArea, x + halfUpdateArea],
      [y - halfUpdateArea, y + halfUpdateArea],
    ]

    a[userId] = index
      .query(range)
      .then(res => res.map(([, bodyId]) => bodyId))

    return a
  }, {})

  return await Async.object(query)
}

export function createMiddleware(index: SpatialIndex): Middleware {
  return store => next => action => {
    switch (action.type) {
      // Recreate the map of adjacent bodies each tick
      case Loop.LOOP_TICK: {
        queryAdjacentBodies(store.getState(), index).then(result => {
          next(updateAdjacentBodies(result))
        })
        break
      }
      case Physics.PHYSICS_ADD_BODY:
        index.insert(
          action.payload.body.position,
          action.payload.body.id,
        )
        break
      case Physics.PHYSICS_UPDATE_BODY:
        index.update(
          action.payload.body.position,
          action.payload.body.id,
        )
        break
      default:
        break
    }

    return next(action)
  }
}
