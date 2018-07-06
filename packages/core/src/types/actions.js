// @flow

import type { AuthAction } from "../state/modules/auth"
import type { LoopAction } from "../state/modules/loop"
import type { UsersAction } from "../state/modules/users"
import type { PhysicsAction } from "../state/modules/physics"
import type { ShipsAction } from "../state/modules/ships"

export type Action =
  | AuthAction
  | LoopAction
  | UsersAction
  | PhysicsAction
  | ShipsAction
  | { type: $Subtype<string> }
