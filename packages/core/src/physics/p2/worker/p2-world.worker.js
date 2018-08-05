import VirtualClock from "virtual-clock"

import * as LocalDriver from "../local"

function send(update) {
  self.postMessage(update)
}

function step() {
  if (!physics) {
    return
  }

  const bodies = physics.step()

  send(bodies)
}

function handleMessage(e) {
  const action = e.data

  if (action.type === "Physics/INIT") {
    const { fixedTimeStep } = action.payload
    const clock = new VirtualClock()

    physics = LocalDriver.make()

    clock.minimum = 0
    clock.maximum = 1 / fixedTimeStep * 1000
    clock.loop = true

    clock.alwaysAt(0, step)

    clock.start()
  }

  if (!physics) {
    return
  }

  physics.handleAction(action)
}

self.addEventListener("message", handleMessage)
