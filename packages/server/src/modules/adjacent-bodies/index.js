// @flow

import { Loop, Players, Physics, getPlayerBody } from "@subspace/core"

import type { PlayerId, BodyId } from "@subspace/core"

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
    adjacentBodies: { [PlayerId]: BodyId[] },
  },
}

export type AdjacentBodiesAction = AdjacentBodiesUpdate

// Action creators

export function updateAdjacentBodies(adjacentBodies: {
  [PlayerId]: BodyId[],
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
  byPlayerId: { [PlayerId]: BodyId[] },
}

const initialAdjacentBodiesState = {
  byPlayerId: {},
}

export default function reducer(
  state: AdjacentBodiesState = initialAdjacentBodiesState,
  action: Action,
) {
  switch (action.type) {
    case ADJACENT_BODIES_UPDATE:
      return {
        ...state,
        byPlayerId: {
          ...state.byPlayerId,
          ...action.payload.adjacentBodies,
        },
      }
    default:
      return state
  }
}

// Selectors

export const getAdjacentBodies = (state: AdjacentBodiesState) =>
  state.byPlayerId

// Middleware

async function queryAdjacentBodies(
  state: State,
  index: SpatialIndex,
) {
  const players = Players.getPlayers(state.players)
  const playerIds = Object.keys(players)
  const query = playerIds.reduce((a, playerId) => {
    const body = getPlayerBody(state, Number(playerId))

    if (body === null) {
      return a
    }

    const { position: [x, y] } = body
    const range = [
      [x - halfUpdateArea, x + halfUpdateArea],
      [y - halfUpdateArea, y + halfUpdateArea],
    ]

    a[playerId] = index
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
