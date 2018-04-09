// @flow

import { reducers as coreReducers } from "@subspace/core"

import adjacentBodies from "./modules/adjacent-bodies"
import clients from "./modules/clients"
import players from "./modules/players"
import ships from "./modules/ships"

const { loop, physics } = coreReducers

const reducers = {
  adjacentBodies,
  clients,
  players,
  ships,
  loop,
  physics,
}

export default reducers

export type Reducers = $Subtype<typeof reducers>
