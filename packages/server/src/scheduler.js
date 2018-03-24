// @flow

import type { Step } from "@subspace/core"

import * as Hrtime from "./util/hrtime"

export const create = (rate: number) => {
  const nsPerTick = rate * Hrtime.NS_PER_SEC
  const hrTimeStep = [0, nsPerTick]

  let previous = process.hrtime()

  const timeoutHandler = (step: Step) => () => {
    const diff = process.hrtime(previous)
    const delta = Hrtime.sub(diff, hrTimeStep)
    const d = Hrtime.sum(delta)

    if (d < 0) {
      setImmediate(timeoutHandler(step))
      return
    }

    step((d + nsPerTick) / Hrtime.NS_PER_SEC)

    previous = Hrtime.add(process.hrtime(), delta)
  }

  const schedule = (step: Step) => {
    setTimeout(timeoutHandler(step))
  }

  return schedule
}
