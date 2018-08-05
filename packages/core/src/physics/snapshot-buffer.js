// @flow

import type { Body } from "../model"

import p2 from "p2"

import * as Vec from "../util/vec"
import * as Vec2 from "../util/vec2"

const SNAPSHOT_DELAY = 1 / 10

const applyInterpBodyUpdate = (
  a: Body,
  b: Body,
  body: p2.Body,
  t,
) => {
  body.position = Vec2.lerp(a.position, b.position, t)
  body.velocity = Vec2.lerp(a.velocity, b.velocity, t)
  body.angle = Vec.lerp(a.angle, b.angle, t)
  body.angularVelocity = Vec.lerp(
    a.angularVelocity,
    b.angularVelocity,
    t,
  )

  return body
}

export const make = (delay: number = SNAPSHOT_DELAY) => {
  const frames = []

  const insert = (snapshot: { [string]: Body }, time: number) => {
    frames.push({ time, snapshot })
  }

  const apply = (bodies: { [string]: p2.Body }, time: number) => {
    let [prev, next] = frames
    let dt = 0

    // Discard expired frames.
    while (prev && next && (dt = time - prev.time) > delay) {
      frames.shift()
      prev = frames[0]
      next = frames[1]
    }

    if (!(next && prev)) {
      return bodies
    }

    for (const id in prev.snapshot) {
      if (prev.snapshot[id] && next.snapshot[id]) {
        bodies[id] = applyInterpBodyUpdate(
          prev.snapshot[id],
          next.snapshot[id],
          bodies[id],
          dt / delay,
        )
      }
    }

    return bodies
  }

  return {
    insert,
    apply,
  }
}
