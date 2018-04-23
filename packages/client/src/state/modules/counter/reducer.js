import { INCREMENT } from "./action-types"

const initialState = { count: -1 }

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 }
  }
  return state
}
