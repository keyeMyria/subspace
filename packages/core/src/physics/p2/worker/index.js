// @flow

import type { PhysicsDriver } from "../../Types"

export function make(workerUrl: string): PhysicsDriver {
  // $FlowFixMe
  const worker = new Worker(workerUrl)

  let state = {
    frame: -1,
    bodies: {},
  }

  worker.addEventListener("message", (e: any) => {
    state = e.data
  })

  function handleAction(action) {
    worker.postMessage(action)
  }

  function step() {
    return state
  }

  return {
    handleAction,
    step,
  }
}
