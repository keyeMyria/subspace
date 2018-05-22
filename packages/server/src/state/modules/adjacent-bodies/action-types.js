// @flow

export const UPDATE = "UPDATE"

export type Update = {
  type: "UPDATE",
  payload: {
    adjacentBodies: { [number]: number[] },
  },
}

export type Action = Update
export default { UPDATE }
