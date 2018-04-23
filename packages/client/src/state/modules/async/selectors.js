import { AsyncState } from "./constants"
import { trimSuffix } from "./util"

export function getAsyncState(state, actionType) {
  return state[trimSuffix(actionType)]
}

export function isPending(state, actionType) {
  return getAsyncState(state, actionType) === AsyncState.PENDING
}

export function isFulfilled(state, actionType) {
  return getAsyncState(state, actionType) === AsyncState.FULFILLED
}

export function isRejected(state, actionType) {
  return getAsyncState(state, actionType) === AsyncState.REJECTED
}
