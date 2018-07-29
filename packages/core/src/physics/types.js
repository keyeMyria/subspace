// @flow

import type { Body } from "../model"
import type { PhysicsAction } from "../state/modules"

export type PhysicsDriver = {
  handleAction(action: PhysicsAction): void,
  step(): { frame: number, bodies: { [string]: Body } },
}
