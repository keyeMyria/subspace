// @flow

import { extractReducers } from "@subspace/redux-module"

import { Auth, Async, Loop, Physics, Ships, Users } from "./modules"

const reducers = extractReducers({
  Auth,
  Async,
  Loop,
  Physics,
  Ships,
  Users,
})

export type Reducers = typeof reducers

export default reducers
