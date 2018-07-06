// @flow

import type {
  AuthAction,
  LoopAction,
  UsersAction,
  PhysicsAction,
  ShipsAction,
} from "../state/modules"

export type Action =
  | AuthAction
  | LoopAction
  | UsersAction
  | PhysicsAction
  | ShipsAction
  | { type: $Subtype<string> }
