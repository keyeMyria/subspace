// @flow

import P2 from "p2"

import type { Body } from "../../model"

const serializeBody = (id: number, body: P2.Body) => {
  const {
    angle,
    angularVelocity,
    mass,
    position,
    velocity,
    width,
    height,
  } = body

  return {
    id,
    angle,
    angularVelocity,
    mass,
    position,
    velocity,
    width,
    height,
  }
}

type PhysicsDriverOptions = {
  gravity: [number, number],
}

export default function(options: PhysicsDriverOptions) {
  const { gravity } = options
  const bodies: { [number]: P2.Body } = {}
  const world = new P2.World({
    gravity,
    sleepMode: P2.World.BODY_SLEEPING,
  })

  const addBody = async (id: number, model: Body) => {
    if (bodies[id]) {
      throw new Error(
        `Cannot add body with id ${id}: id already exists.`,
      )
    }

    const {
      angle,
      angularVelocity,
      mass,
      position,
      velocity,
      width,
      height,
    } = model
    const box = new P2.Box({ width, height })
    const body = new P2.Body({
      angle,
      angularVelocity,
      mass,
      position,
      velocity,
    })

    body.addShape(box)
    world.addBody(body)

    bodies[id] = body

    return serializeBody(id, body)
  }

  const rotateBody = async (id: number, angle: number) => {
    const body = bodies[id]

    if (!body) {
      throw new Error(
        `Cannot update body with id ${id}: body does not exist.`,
      )
    }

    body.angle = angle

    return serializeBody(id, body)
  }

  return {
    addBody,
    rotateBody,
  }
}
