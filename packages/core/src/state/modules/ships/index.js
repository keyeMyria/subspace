// @flow

import { createReduxModule } from "@subspace/redux-module"

import actionCreators from "./action-creators"
import actionTypes from "./action-types"
import selectors from "./selectors"
import reducer from "./reducer"

export type { State as ShipState } from "./reducer"

export default createReduxModule("Ships", {
  actionTypes,
  actionCreators,
  reducer,
  selectors,
})
