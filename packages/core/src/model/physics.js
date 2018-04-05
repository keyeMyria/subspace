// @flow

export type BodyId = string

export type Body = {
  id: BodyId,
  angle: number,
  angularVelocity: number,
  mass: number,
  position: [number, number],
  velocity: [number, number],
  width: number,
  height: number,
}
