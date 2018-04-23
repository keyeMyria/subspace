import { CONNECT_FULFILLED, CLOSE } from "./action-types"

const initialState = { isConnected: false }

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CONNECT_FULFILLED:
      return {
        ...state,
        isConnected: true,
      }
    case CLOSE:
      return {
        ...state,
        isConnected: false,
      }
  }

  return state
}
