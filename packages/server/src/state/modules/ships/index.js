// @flow

import { Ships } from "@subspace/core"
import {
  createReduxModule,
  composeReduxModules,
} from "@subspace/redux-module"

import * as actionCreators from "./action-creators"
import actionTypes from "./action-types"
import * as selectors from "./selectors"
import reducer from "./reducer"

const ships = createReduxModule("Ships", {
  actionTypes,
  actionCreators,
  reducer,
  selectors,
})

export default composeReduxModules(Ships, ships)
