// @flow

import loop from "./modules/loop"
import physics from "./modules/physics"
import users from "./modules/users"
import ships from "./modules/ships"

const reducers = {
  loop,
  physics,
  users,
  ships,
}

export default reducers

export type Reducers = typeof reducers
