// @flow

import { createReduxModule } from "@subspace/redux-module"

type State = {
  byUserId: { [string]: string[] },
}

type Update = {
  type: "UPDATE",
  payload: {
    adjacentBodies: { [string]: string[] },
  },
}

type Action = Update

export type {
  State as SpatialIndexState,
  Action as SpatialIndexAction,
}

const actionTypes = {
  UPDATE: "UPDATE",
}

const actionCreators = {
  update(adjacentBodies: { [string]: string[] }): Update {
    return {
      type: actionTypes.UPDATE,
      payload: {
        adjacentBodies,
      },
    }
  },
}

function reducer(
  state: State = {
    byUserId: {},
  },
  action: Action,
) {
  switch (action.type) {
    case actionTypes.UPDATE:
      return {
        ...state,
        byUserId: action.payload.adjacentBodies,
      }
    default:
      return state
  }
}

const selectors = {
  getAdjacentBodies(state: State) {
    return state.byUserId
  },
}

export default createReduxModule("SpatialIndex", {
  actionTypes,
  actionCreators,
  reducer,
  selectors,
})
