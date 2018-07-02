// @flow

import type { Ship, TurnDirection } from "../../../model"

export const ADD = "ADD"
export type Add = {
  type: "ADD",
  payload: {
    ship: Ship,
  },
}

export const UPDATE = "UPDATE"
export type Update = {
  type: "UPDATE",
  payload: {
    ship: Ship,
  },
}

export const TURN = "TURN"
export type Turn = {
  type: "TURN",
  payload: {
    shipId: number,
    direction: TurnDirection,
  },
}

export default { ADD, UPDATE, TURN }
export type Action = Add | Update | Turn
