// @flow

import { Async, Loop, Physics, Ships, Users } from "@subspace/core"
import { extractReducers } from "@subspace/redux-module"

import * as reduxModules from "./state/modules"

const coreReducers = extractReducers({
  Async,
  Loop,
  Physics,
  Ships,
  Users,
})
const localReducers = extractReducers(reduxModules)

const reducers = {
  ...coreReducers,
  ...localReducers,
}

export default reducers

export type Reducers = $Subtype<typeof reducers>
