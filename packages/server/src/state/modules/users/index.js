// @flow

import { Users } from "@subspace/core"
import {
  createReduxModule,
  composeReduxModules,
} from "@subspace/redux-module"

import * as actionCreators from "./action-creators"
import actionTypes from "./action-types"
import * as selectors from "./selectors"
import reducer from "./reducer"

const users = createReduxModule("Users", {
  actionTypes,
  actionCreators,
  reducer,
  selectors,
})

export default composeReduxModules(Users, users)
