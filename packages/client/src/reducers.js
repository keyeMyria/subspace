// @flow

import {
  reduxModules as coreReduxModules,
  extractReducers,
} from "@subspace/core"
import * as reduxModules from "./state/modules"

const coreReducers = extractReducers(coreReduxModules)
const localReducers = extractReducers(reduxModules)

export default {
  ...coreReducers,
  ...localReducers,
}

export type Reducers = $Subtype<typeof localReducers>
