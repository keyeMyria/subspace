// @flow

import type { Body } from "../../model"

import p2 from "p2"

export function serializeBody(
  body: p2.Body,
  update: Body,
  id: string,
): Body {
  const {
    interpolatedAngle: angle,
    velocity: [vx, vy],
    // P2's Body.interpolatedPosition property is not a true Array.
    interpolatedPosition: [x, y],
    shapes: [{ width, height }],
  } = body

  const result = update || {
    id,
    position: [0, 0],
    velocity: [0, 0],
  }

  result.angle = angle
  result.position[0] = x
  result.position[1] = y
  result.velocity[0] = vx
  result.velocity[1] = vy
  result.width = width
  result.height = height

  return result
}

export function serializeBodies(
  bodies: { [string]: Body },
  out: { [string]: Body },
) {
  for (const id in bodies) {
    if (bodies.hasOwnProperty(id)) {
      out[id] = serializeBody(bodies[id], out[id], id)
    }
  }

  return out
}
