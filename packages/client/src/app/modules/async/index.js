// @flow

import { Action } from "../../types"
import { AsyncSuffixes } from "../../constants"
import { trimSuffix } from "../../util"

// Reducer

type AsyncActionMap = { [string]: boolean }

type AsyncState = {
  pending: AsyncActionMap,
  fulfilled: AsyncActionMap,
  error: AsyncActionMap,
}

const initialState: AsyncState = {
  pending: {},
  fulfilled: {},
  error: {},
}

export default function reducer(
  state: AsyncState = initialState,
  action: Action,
) {
  if (action.type.endsWith(AsyncSuffixes.PENDING)) {
    const key = trimSuffix(action.type, AsyncSuffixes.PENDING)

    return {
      ...state,
      pending: {
        ...state.pending,
        [key]: true,
      },
      fulfilled: {
        ...state.fulfilled,
        [key]: false,
      },
      error: {
        ...state.error,
        [key]: false,
      },
    }
  } else if (action.type.endsWith(AsyncSuffixes.FULFILLED)) {
    const key = trimSuffix(action.type, AsyncSuffixes.FULFILLED)

    return {
      ...state,
      pending: {
        ...state.pending,
        [key]: false,
      },
      fulfilled: {
        ...state.fulfilled,
        [key]: true,
      },
      error: {
        ...state.error,
        [key]: false,
      },
    }
  } else if (action.type.endsWith(AsyncSuffixes.REJECTED)) {
    const key = trimSuffix(action.type, AsyncSuffixes.REJECTED)

    return {
      ...state,
      pending: {
        ...state.pending,
        [key]: false,
      },
      fulfilled: {
        ...state.fulfilled,
        [key]: false,
      },
      error: {
        ...state.error,
        [key]: true,
      },
    }
  }

  return state
}

// Selectors

export function isActionPending(
  state: AsyncState,
  actionType: string,
) {
  return !!state.pending[
    trimSuffix(actionType, AsyncSuffixes.PENDING)
  ]
}

export function isActionRejected(
  state: AsyncState,
  actionType: string,
) {
  return !!state.error[trimSuffix(actionType, AsyncSuffixes.REJECTED)]
}

export function isActionFulfilled(
  state: AsyncState,
  actionType: string,
) {
  return !!state.fulfilled[
    trimSuffix(actionType, AsyncSuffixes.FULFILLED)
  ]
}
