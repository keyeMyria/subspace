// @flow

import { createReduxModule } from "@subspace/redux-module"

import actionCreators from "./action-creators"
import actionTypes from "./action-types"
import selectors from "./selectors"
import reducer from "./reducer"

export default createReduxModule("Physics", {
  actionTypes,
  actionCreators,
  reducer,
  selectors,
})
