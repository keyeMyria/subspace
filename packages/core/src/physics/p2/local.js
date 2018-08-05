// @flow

import type { PhysicsAction } from "../../state/modules"
import type { Body as BodyModel } from "../../model"
import type { PhysicsDriver } from "../types"

import p2 from "p2"

import Physics from "../../state/modules/Physics"
import * as SnapshotBuffer from "../snapshot-buffer"
import { serializeBodies } from "./util"

const MAX_SUB_STEPS = 10

function getTime() {
  if (
    typeof process === "undefined" ||
    process.env.APP_ENV === "browser"
  ) {
    return performance.now()
  }
  const [s, ns] = process.hrtime()

  return s * 1e3 + ns / 1e6
}

function createWorld(gravity, friction): p2.World {
  const world = new p2.World({
    gravity,
    sleepMode: p2.World.BODY_SLEEPING,
  })

  world.defaultContactMaterial.friction = friction

  return world
}

function addBody(model, bodies, world) {
  if (!world) {
    return
  }

  const body = new p2.Body({
    ...model,
    allowSleep: true,
    sleepSpeedLimit: 1,
    sleepTimeLimit: 1,
  })
  const { id, width, height } = model

  body.addShape(new p2.Box({ width, height }))

  world.addBody(body)

  bodies[id] = body
}

function removeBody(model, bodies, world) {
  if (!world) {
    return
  }

  const { id } = model
  const body = bodies[id]

  if (!body) {
    return
  }

  Reflect.deleteProperty(bodies, id)

  world.removeBody(body)
}

function applyForce(options, bodies) {
  const { bodyId, position, force } = options
  const body = bodies[bodyId]

  if (!body) {
    return
  }

  body.applyForceLocal(force, position)
}

function rotateBody(options, bodies) {
  const { bodyId, angle } = options
  const body = bodies[bodyId]

  if (!body) {
    return
  }

  body.angularVelocity = angle
}

export function make(): PhysicsDriver {
  const bodies: { [string]: p2.Body } = {}
  const update: { [string]: BodyModel } = {}
  const snapshotBuffer = SnapshotBuffer.make()

  let world: ?p2.World = null
  let previousTime = 0
  let frame = -1
  let _fixedTimeStep

  function init(options) {
    const { friction = 0, gravity = [0, 0], fixedTimeStep } = options

    _fixedTimeStep = fixedTimeStep

    world = createWorld(gravity, friction)
  }

  function step() {
    if (!world) {
      return {
        frame: -1,
        bodies: {},
      }
    }

    const now = getTime()
    const timeSinceLastStep = (now - previousTime) / 1000

    snapshotBuffer.apply(bodies, now)
    world.step(
      _fixedTimeStep / 1000,
      timeSinceLastStep,
      MAX_SUB_STEPS,
    )

    previousTime = now
    frame = frame + 1

    return { frame, bodies: serializeBodies(bodies, update) }
  }

  function handleAction(action: PhysicsAction) {
    switch (action.type) {
      case Physics.INIT:
        return init(action.payload)
      case Physics.ADD_BODY:
        return addBody(action.payload.body, bodies, world)
      case Physics.REMOVE_BODY:
        return removeBody(action.payload.body, bodies, world)
      case Physics.APPLY_FORCE:
        return applyForce(action.payload, bodies)
      case Physics.ROTATE_BODY:
        return rotateBody(action.payload, bodies)
      case Physics.APPLY_SNAPSHOT:
        return snapshotBuffer.insert(action.payload.bodies, getTime())
      default:
        throw new Error(
          `PhysicsDriver: ${action.type} not recognized.`,
        )
    }
  }

  return {
    handleAction,
    step,
  }
}
