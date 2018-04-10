// @flow

import type { ShipId } from "./ship"

export type PlayerId = number

export type Player = {
  id: PlayerId,
  activeShipId?: ShipId,
}
