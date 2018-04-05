// @flow

import { Physics, Loop, getPlayerBody } from "@subspace/core"

import type { Connection } from "@web-udp/server"
import type { PlayerId } from "@subspace/core"

import * as Hrtime from "../util/hrtime"

import type { Middleware, State } from "../types"
import type { SpatialIndex, QueryResult } from "../cache/types"

const UPDATE_AREA = 1000
const halfUpdateArea = 0.5 * UPDATE_AREA

const sendStateUpdates = async (
  state: State,
  index: SpatialIndex,
  getPlayers: () => { [PlayerId]: Connection },
) => {
  const players = getPlayers()
  const ids = Object.keys(players)
  const query = ids.map(async id => {
    const body = getPlayerBody(state, id)

    if (body === null) {
      return {}
    }

    const { position: [x, y] } = body
    const query = [
      [x - halfUpdateArea, x + halfUpdateArea],
      [y - halfUpdateArea, y + halfUpdateArea],
    ]
    const res = await index.query(query)
    const bodies = res.map(([, bodyId]) =>
      Physics.getBody(state.physics, bodyId),
    )

    return { id, bodies }
  })

  const results = await Promise.all(query)

  for (const { id, bodies } of results) {
    players[id].send(JSON.stringify(bodies))
  }
}

export const createMiddleware = (
  index: SpatialIndex,
  getPlayers: () => { [PlayerId]: Connection },
  sendRate: number,
): Middleware => {
  const send = Hrtime.throttle(sendStateUpdates, sendRate)

  return store => next => action => {
    switch (action.type) {
      case Loop.LOOP_TICK:
        send(store.getState(), index, getPlayers)
        break
      default:
        break
    }

    return next(action)
  }
}
