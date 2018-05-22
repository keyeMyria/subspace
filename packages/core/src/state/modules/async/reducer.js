import { trimSuffix, getAsyncStateFromActionType } from "./util"

const initialState = {}

export default function reducer(state = initialState, action) {
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
