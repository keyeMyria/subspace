import { createReduxModule } from "@subspace/redux-module"

import * as actionCreators from "./action-creators"
import * as actionTypes from "./action-types"
import * as selectors from "./selectors"
import reducer from "./reducer"

export default createReduxModule("Auth", {
  reducer,
  actionCreators,
  actionTypes,
  selectors,
})
