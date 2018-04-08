// @flow

import type { BodyId } from "./physics"

export type ShipId = string

export type Ship = {
  id: ShipId,
  bodyId?: BodyId,
}
