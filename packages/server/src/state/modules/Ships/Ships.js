// @flow

import type { Ship, ShipsState, ShipsAction } from "@subspace/core"

import { Ships } from "@subspace/core"
import {
  createReduxModule,
  composeReduxModules,
} from "@subspace/redux-module"

type State = ShipsState & {}

type Load = {
  type: "LOAD",
  payload: {
    shipId: string,
  },
}

type LoadFulfilled = {
  type: "LOAD+",
  payload: {
    ship: Ship,
  },
}

type LoadRejected = {
  type: "LOAD-",
  payload: {
    shipId: string,
  },
  error: Error,
}

type Action = ShipsAction | Load | LoadFulfilled | LoadRejected

export type { State as ShipsState, Action as ShipsAction }

const actionTypes = {
  LOAD: "LOAD",
  LOAD_FULFILLED: "LOAD+",
  LOAD_REJECTED: "LOAD-",
}

const actionCreators = {
  load(shipId: string): Load {
    return {
      type: actionTypes.LOAD,
      payload: {
        shipId,
      },
    }
  },
  fulfillLoad(ship: Ship): LoadFulfilled {
    return {
      type: actionTypes.LOAD_FULFILLED,
      payload: {
        ship,
      },
    }
  },
  rejectLoad(shipId: string, error: Error): LoadRejected {
    return {
      type: actionTypes.LOAD_REJECTED,
      payload: {
        shipId,
      },
      error,
    }
  },
}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case actionTypes.LOAD_FULFILLED: {
      const { ship } = action.payload
      return {
        ...state,
        byId: {
          ...state.byId,
          [ship.id]: ship,
        },
      }
    }
    default:
      return state
  }
}

const selectors = {}

const ships = createReduxModule("Ships", {
  actionTypes,
  actionCreators,
  reducer,
  selectors,
})

export default composeReduxModules(Ships, ships)
