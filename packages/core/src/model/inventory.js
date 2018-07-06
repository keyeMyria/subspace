// @flow

import type { Item } from "./item"
import type { Ship } from "./ship"

export type Inventory = {
  id: string,
  items: Item[],
  ship: Ship,
}
