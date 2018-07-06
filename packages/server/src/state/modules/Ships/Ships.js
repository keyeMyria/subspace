// @flow

import type { Ship, ShipsState, ShipsAction } from "@subspace/core"

import { Ships, toAsync } from "@subspace/core"
import {
  createReduxModule,
  composeReduxModules,
} from "@subspace/redux-module"

export type State = ShipsState & {}

export type Load = {
  type: "LOAD!",
  payload: {
    shipId: string,
  },
}

export type LoadFulfilled = {
  type: "LOAD-",
  payload: {
    ship: Ship,
  },
}

export type LoadRejected = {
  type: "LOAD+",
  payload: {
    shipId: string,
  },
  error: Error,
}

export type Action = ShipsAction | Load | LoadFulfilled | LoadRejected

const [LOAD, LOAD_FULFILLED, LOAD_REJECTED] = toAsync("LOAD")

const actionTypes = {
  LOAD,
  LOAD_FULFILLED,
  LOAD_REJECTED,
}

const actionCreators = {
  load(shipId: string): Load {
    return {
      type: (LOAD: any),
      payload: {
        shipId,
      },
    }
  },
  fulfillLoad(ship: Ship): LoadFulfilled {
    return {
      type: (LOAD_FULFILLED: any),
      payload: {
        ship,
      },
    }
  },
  rejectLoad(shipId: string, error: Error): LoadRejected {
    return {
      type: (LOAD_REJECTED: any),
      payload: {
        shipId,
      },
      error,
    }
  },
}

function reducer(state: State, action: Action) {
  return state
}

const selectors = {}

const ships = createReduxModule("Ships", {
  actionTypes,
  actionCreators,
  reducer,
  selectors,
})

export default composeReduxModules(Ships, ships)
