// @flow

import { extractReducers } from "@subspace/redux-module"

import { Async, Loop, Physics, Ships, Users } from "./state/modules"

const reducers = extractReducers({
  Async,
  Loop,
  Physics,
  Ships,
  Users,
})

export type Reducers = typeof reducers

export default reducers
