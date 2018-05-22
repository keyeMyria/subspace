// @flow

import type { Action as LoopAction } from "../state/modules/loop/action-types"
import type { UserAction } from "../state/modules/users"
import type { PhysicsAction } from "../state/modules/physics"
import type { ShipAction } from "../state/modules/ships"

export type Action =
  | LoopAction
  | UserAction
  | PhysicsAction
  | ShipAction
  | { type: $Subtype<string> }
