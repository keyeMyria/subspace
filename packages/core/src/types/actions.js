// @flow

import type { LoopAction } from "../modules/loop"
import type { PlayerAction } from "../modules/players"
import type { PhysicsAction } from "../modules/physics"
import type { ShipAction } from "../modules/ships"

export type Action =
  | LoopAction
  | PlayerAction
  | PhysicsAction
  | ShipAction
