// @flow

import P2 from "p2"

import type { Body } from "../../model"

const serializeBody = (id: string, body: P2.Body) => {
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
  const bodies: { [string]: P2.Body } = {}
  const world = new P2.World({
    gravity,
    sleepMode: P2.World.BODY_SLEEPING,
  })

  const addBody = async (bodyId: string, model: Body) => {
    if (bodies[bodyId]) {
      throw new Error(
        `Cannot add body with id ${bodyId}: id already exists.`,
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

    bodies[bodyId] = body

    return serializeBody(bodyId, body)
  }

  const rotateBody = async (bodyId: string, angle: number) => {
    const body = bodies[bodyId]

    if (!body) {
      throw new Error(
        `Cannot update body with id ${bodyId}: body does not exist.`,
      )
    }

    body.angle = angle

    return serializeBody(bodyId, body)
  }

  return {
    addBody,
    rotateBody,
  }
}
