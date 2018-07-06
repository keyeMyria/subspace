// @flow

import type { ShipType } from "./ship-type"

export type Ship = {
  id: string,
  bodyId?: string,
  shipType: ShipType,
}
