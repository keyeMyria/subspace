// @flow

import { createReduxModule } from "@subspace/redux-module"

import { AsyncState } from "./constants"
import { trimSuffix, getAsyncStateFromActionType } from "./util"

type State = {
  [string]: $Keys<typeof AsyncState>,
}

export type { State as AsyncState }

const actionTypes = {}
const actionCreators = {}

function reducer(state: State = {}, action: any) {
  const { type } = action
  const asyncState = getAsyncStateFromActionType(type)

  if (asyncState === null) {
    return state
  }

  const actionType = trimSuffix(type)

  return {
    ...state,
    [actionType]: asyncState,
  }
}

const selectors = {
  getAsyncState(state, actionType) {
    return state[trimSuffix(actionType)]
  },
  isPending(state, actionType) {
    return (
      selectors.getAsyncState(state, actionType) ===
      AsyncState.PENDING
    )
  },
  isFulfilled(state, actionType) {
    return (
      selectors.getAsyncState(state, actionType) ===
      AsyncState.FULFILLED
    )
  },
  isRejected(state, actionType) {
    return (
      selectors.getAsyncState(state, actionType) ===
      AsyncState.REJECTED
    )
  },
}

export default createReduxModule("Async", {
  actionTypes,
  actionCreators,
  reducer,
  selectors,
})
