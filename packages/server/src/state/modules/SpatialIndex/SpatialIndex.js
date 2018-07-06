// @flow

import { createReduxModule } from "@subspace/redux-module"

export type State = {
  byUserId: { [string]: string[] },
}

export type Update = {
  type: "UPDATE",
  payload: {
    adjacentBodies: { [string]: string[] },
  },
}

export type Action = Update

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
        byUserId: {
          ...state.byUserId,
          ...action.payload.adjacentBodies,
        },
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
