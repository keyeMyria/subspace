// @flow

import type { Ship } from "./ship"
import type { Station } from "./station"

export type Hangar = {
  id: number,
  ships: Ship[],
  station: Station,
}
