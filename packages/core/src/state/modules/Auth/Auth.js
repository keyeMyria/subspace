// @flow

import { createReduxModule } from "@subspace/redux-module"

type State = {}

type TokenInvalid = {
  type: "TOKEN_INVALID",
}

type Action = TokenInvalid

export type { State as AuthState, Action as AuthAction }

const TOKEN_INVALID = "TOKEN_INVALID"

const actionTypes = {
  TOKEN_INVALID,
}
const actionCreators = {
  tokenInvalid(): TokenInvalid {
    return {
      type: TOKEN_INVALID,
    }
  },
}

function reducer(state: State = {}) {
  return state
}

const selectors = {}

export default createReduxModule("Auth", {
  actionTypes,
  actionCreators,
  reducer,
  selectors,
})
