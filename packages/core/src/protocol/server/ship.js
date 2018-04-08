// @flow

import type { Ship } from "../../model"
import type { MessageTypeShipUpdate } from "./message-types"
import { MESSAGE_TYPE_SHIP_UPDATE } from "./message-types"

export type ShipUpdateMessage = [MessageTypeShipUpdate, Ship]

export type ShipMessage = ShipUpdateMessage

export const shipUpdateMessage = (ship: Ship): ShipUpdateMessage => [
  MESSAGE_TYPE_SHIP_UPDATE,
  ship,
]
