// @flow

import type { ShipType } from "./ship-type"

export type Ship = {
  id: number,
  bodyId?: number,
  shipType: ShipType,
}
