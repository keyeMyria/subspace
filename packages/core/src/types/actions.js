// @flow

import type { Action as AuthAction } from "../state/modules/auth/action-types"
import type { Action as LoopAction } from "../state/modules/loop/action-types"
import type { Action as UserAction } from "../state/modules/users/action-types"
import type { Action as PhysicsAction } from "../state/modules/physics/action-types"
import type { Action as ShipAction } from "../state/modules/ships/action-types"

export type {
  AuthAction,
  ShipAction,
  UserAction,
  LoopAction,
  PhysicsAction,
}

export type Action =
  | AuthAction
  | LoopAction
  | UserAction
  | PhysicsAction
  | ShipAction
  | { type: $Subtype<string> }
