// @flow

import { AsyncSuffix, AsyncState } from "./constants"

export function toAsync(actionType: string): string[] {
  return Object.values(AsyncSuffix).map(
    asyncPrefix => `${actionType}${String(asyncPrefix)}`,
  )
}

export function trimSuffix(actionType: string) {
  return actionType.slice(0, -1)
}

export function getAsyncStateFromActionType(actionType: string) {
  const suffix = actionType[actionType.length - 1]

  switch (suffix) {
    case AsyncSuffix.PENDING:
      return AsyncState.PENDING
    case AsyncSuffix.FULFILLED:
      return AsyncState.FULFILLED
    case AsyncSuffix.REJECTED:
      return AsyncState.REJECTED
    default:
      return null
  }
}
