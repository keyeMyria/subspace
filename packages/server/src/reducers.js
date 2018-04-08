// @flow

import adjacentBodies from "./modules/adjacent-bodies"
import clients from "./modules/clients"
import players from "./modules/players"
import ships from "./modules/ships"

const reducers = {
  adjacentBodies,
  clients,
  players,
  ships,
}

export default reducers

export type Reducers = typeof reducers
