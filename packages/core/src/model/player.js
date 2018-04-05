// @flow

import type { ShipId } from "./ship"

export type PlayerId = string

export type Player = {
  id: PlayerId,
  activeShipId?: ShipId,
}
