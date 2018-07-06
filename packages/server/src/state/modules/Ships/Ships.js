// @flow

import type { Ship, ShipState, ShipAction } from "@subspace/core"

import { Ships, toAsync } from "@subspace/core"
import {
  createReduxModule,
  composeReduxModules,
} from "@subspace/redux-module"

export type State = ShipState & {}

export type Load = {
  type: "LOAD!",
  payload: {
    shipId: number,
  },
}

export type LoadFulfilled = {
  type: "LOAD-",
  payload: {
    shipId: number,
  },
  error: Error,
}

export type LoadRejected = {
  type: "LOAD+",
  payload: {
    ship: Ship,
  },
}

export type Action = ShipAction | Load | LoadFulfilled | LoadRejected

const [LOAD, LOAD_FULFILLED, LOAD_REJECTED] = toAsync("LOAD")

const actionTypes = {
  LOAD,
  LOAD_FULFILLED,
  LOAD_REJECTED,
}

const actionCreators = {
  load(shipId: number) {
    return {
      type: LOAD,
      payload: {
        shipId,
      },
    }
  },
  fulfillLoad(ship: Ship) {
    return {
      type: LOAD_FULFILLED,
      payload: {
        ship,
      },
    }
  },
  rejectLoad(shipId: number, error: Error) {
    return {
      type: LOAD_REJECTED,
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
