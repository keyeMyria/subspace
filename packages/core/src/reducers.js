import loop from "./modules/loop"
import physics from "./modules/physics"
import player from "./modules/player"
import ship from "./modules/ship"

const reducers = {
  loop,
  physics,
  player,
  ship,
}

export default reducers

export type Reducers = typeof reducers
