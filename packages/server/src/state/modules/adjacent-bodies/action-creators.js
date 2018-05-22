// @flow

import { UPDATE } from "./action-types"

export function update(adjacentBodies: { [number]: number[] }) {
  return {
    type: UPDATE,
    payload: {
      adjacentBodies,
    },
  }
}
