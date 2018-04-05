// @flow

import type { TurnDirection, ThrustDirection } from "../model"

export type InputMessageTypeThrust = 0
export type InputMessageTypeTurn = 1

export const INPUT_MESSAGE_TYPE: $ReadOnly<{|
  thrust: InputMessageTypeThrust,
  turn: InputMessageTypeTurn,
|}> = Object.freeze({
  thrust: 0,
  turn: 1,
})

export type InputMessageType = $Values<typeof INPUT_MESSAGE_TYPE>
export type InputMessageTurn = [InputMessageTypeTurn, TurnDirection]
export type InputMessageThrust = [
  InputMessageTypeThrust,
  ThrustDirection,
]

export type InputMessage = InputMessageTurn | InputMessageThrust

export const thrust = (
  direction: ThrustDirection,
): InputMessageThrust => [INPUT_MESSAGE_TYPE.thrust, direction]

export const turn = (direction: TurnDirection): InputMessageTurn => [
  INPUT_MESSAGE_TYPE.turn,
  direction,
]

export const getType = (message: InputMessage) => message[0]
export const getData = (message: InputMessage) => message[1]
