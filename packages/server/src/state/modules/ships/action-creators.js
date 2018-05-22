// @flow

import type { Ship } from "@subspace/core"

import { LOAD, LOAD_FULFILLED, LOAD_REJECTED } from "./action-types"

export function load(shipId: number) {
  return {
    type: LOAD,
    payload: {
      shipId,
    },
  }
}

export function fulfillLoad(ship: Ship) {
  return {
    type: LOAD_FULFILLED,
    payload: {
      ship,
    },
  }
}

export function rejectLoad(shipId: number, error: Error) {
  return {
    type: LOAD_REJECTED,
    payload: {
      shipId,
    },
    error,
  }
}
