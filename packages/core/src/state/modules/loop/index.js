// @flow

import { createReduxModule } from "@subspace/redux-module"

import actionCreators from "./action-creators"
import actionTypes from "./action-types"
import selectors from "./selectors"
import reducer from "./reducer"

export default createReduxModule("Loop", {
  actionTypes,
  actionCreators,
  reducer,
  selectors,
})
