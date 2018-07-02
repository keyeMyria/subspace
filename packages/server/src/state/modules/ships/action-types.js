// @flow

import type { Ship, ShipAction } from "@subspace/core"
import { toAsync } from "@subspace/core"

export const [LOAD, LOAD_FULFILLED, LOAD_REJECTED] = toAsync("LOAD")

export type Load = {
  type: "LOAD!",
  payload: {
    shipId: number,
  },
}

export type LoadFulfilled = {
  type: "LOAD-",
  payload: {
    shipId: number,
  },
  error: Error,
}

export type LoadRejected = {
  type: "LOAD+",
  payload: {
    ship: Ship,
  },
}

export type Action = ShipAction | Load | LoadFulfilled | LoadRejected
export default { LOAD, LOAD_FULFILLED, LOAD_REJECTED }
