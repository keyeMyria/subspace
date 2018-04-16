// @flow

import { reducers as coreReducers } from "@subspace/core"

import adjacentBodies from "./modules/adjacent-bodies"
import clients from "./modules/clients"
import users from "./modules/users"
import ships from "./modules/ships"

const { loop, physics } = coreReducers

const reducers = {
  adjacentBodies,
  clients,
  users,
  ships,
  loop,
  physics,
}

export default reducers

export type Reducers = $Subtype<typeof reducers>
