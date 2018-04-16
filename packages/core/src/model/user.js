// @flow

import type { ShipId } from "./ship"

export type UserId = number

export type User = {
  id: UserId,
  activeShipId?: ShipId,
}
