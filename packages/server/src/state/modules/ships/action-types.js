// @flow

import type { Ship } from "@subspace/core"
import { toAsync } from "@subspace/core"

export const [LOAD, LOAD_FULFILLED, LOAD_REJECTED] = toAsync("LOAD")

export type ShipLoad = {
  type: "LOAD!",
  payload: {
    shipId: number,
  },
}

export type ShipLoadFulfilled = {
  type: "LOAD-",
  payload: {
    shipId: number,
  },
  error: Error,
}

export type ShipLoadRejected = {
  type: "LOAD+",
  payload: {
    ship: Ship,
  },
}

export type Action = ShipLoad | ShipLoadFulfilled | ShipLoadRejected
export default { LOAD, LOAD_FULFILLED, LOAD_REJECTED }
