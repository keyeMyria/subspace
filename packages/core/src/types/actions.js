// @flow

import type { LoopAction } from "../modules/loop"
import type { UserAction } from "../modules/users"
import type { PhysicsAction } from "../modules/physics"
import type { ShipAction } from "../modules/ships"

export type Action =
  | LoopAction
  | UserAction
  | PhysicsAction
  | ShipAction
  | { type: $Subtype<string> }
