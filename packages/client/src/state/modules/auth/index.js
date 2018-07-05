import {
  createReduxModule,
  composeReduxModules,
} from "@subspace/redux-module"
import { Auth } from "@subspace/core"

import * as actionCreators from "./action-creators"
import * as actionTypes from "./action-types"
import * as selectors from "./selectors"
import reducer from "./reducer"

const auth = createReduxModule("Auth", {
  reducer,
  actionCreators,
  actionTypes,
  selectors,
})

export default composeReduxModules(Auth, auth)
