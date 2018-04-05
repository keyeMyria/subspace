// @flow

import type { LoopStart, LoopTick, LoopPause } from "../modules/loop"
import type { PlayerAdd } from "../modules/players"
import type {
  PhysicsAddBody,
  PhysicsUpdateBody,
} from "../modules/physics"
import type { ShipAdd, ShipTurn } from "../modules/ships"

export type Action =
  | LoopStart
  | LoopTick
  | LoopPause
  | PlayerAdd
  | PhysicsAddBody
  | PhysicsUpdateBody
  | ShipAdd
  | ShipTurn
