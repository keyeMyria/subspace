import {
  LOGIN_FULFILLED,
  REGISTER_FULFILLED,
  AUTHENTICATE_FULFILLED,
  LOGOUT,
} from "./action-types"

const initialState = {
  user: null,
  token: null,
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_FULFILLED:
    case REGISTER_FULFILLED:
    case AUTHENTICATE_FULFILLED:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      }
    case LOGOUT:
      return {
        ...state,
        user: null,
        token: null,
      }
    default:
      return state
  }
}
