// @flow

import type { Entity } from "./entity"

export type Ship = Entity & {
  bodyId?: string,
  shipTypeId: string,
  thrust: [number, number],
  turn: [number, number],
}
