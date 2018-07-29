// @flow

import type { PhysicsAction } from "../../state/modules"
import type { Body as BodyModel } from "../../model"
import type { PhysicsDriver } from "../types"

import p2 from "p2"

import { Physics } from "../../state/modules"
import { serializeBodies } from "./util"

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

function applySnapshot(
  snapshot: { [string]: BodyModel },
  bodies: { [string]: p2.Body },
) {
  for (let bodyId in snapshot) {
    const body = bodies[bodyId]
    const update = snapshot[bodyId]
    bodies[bodyId] = Object.assign(body, update)
  }
}

export function make(): PhysicsDriver {
  const bodies: { [string]: p2.Body } = {}
  const update: { [string]: BodyModel } = {}

  let world: ?p2.World = null
  let previousTime = 0
  let _maxSubSteps: ?number = 0
  let frame = -1

  function init(options) {
    const {
      friction = 0,
      gravity = [0, 0],
      maxSubsteps = 10,
    } = options

    world = createWorld(gravity, friction)

    _maxSubSteps = maxSubsteps
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

    world.step(1 / 60, timeSinceLastStep, _maxSubSteps)

    previousTime = now
    frame = frame + 1

    return { frame, bodies: serializeBodies(bodies, update) }
  }

  function handleAction(action: PhysicsAction) {
    switch (action.type) {
      case Physics.INIT:
        init(action.payload)
        break
      case Physics.ADD_BODY:
        addBody(action.payload.body, bodies, world)
        break
      case Physics.REMOVE_BODY:
        removeBody(action.payload.body, bodies, world)
        break
      case Physics.APPLY_FORCE:
        applyForce(action.payload, bodies)
        break
      case Physics.ROTATE_BODY:
        rotateBody(action.payload, bodies)
        break
      case Physics.APPLY_SNAPSHOT:
        applySnapshot(action.payload.bodies, bodies)
        break
      default:
        throw new Error(`PhysicsDriver: ${action.type} not found.`)
    }
  }

  return {
    handleAction,
    step,
  }
}
