// @flow

import type { Ship } from "../../model"
import type { MessageTypeShipEnter } from "./message-types"
import { MESSAGE_TYPE_SHIP_ENTER } from "./message-types"

export type ShipEnterMessage = [MessageTypeShipEnter, Ship]

export type ShipMessage = ShipEnterMessage

export const shipEnterMessage = (ship: Ship): ShipEnterMessage => [
  MESSAGE_TYPE_SHIP_ENTER,
  ship,
]
