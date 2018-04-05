// @flow

export const THRUST_DIRECTION = Object.freeze({
  forwards: 0,
  backwards: 1,
})

export const TURN_DIRECTION = Object.freeze({
  left: 0,
  right: 1,
})

export type ThrustDirection = $Values<typeof THRUST_DIRECTION>
export type TurnDirection = $Values<typeof THRUST_DIRECTION>

export type ThrustInput = {
  direction: ThrustDirection,
}

export type TurnInput = {
  direction: TurnDirection,
}

export type Input = ThrustInput | TurnDirection
