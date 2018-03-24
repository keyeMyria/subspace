// @flow

import type { Step } from "@subspace/core"

export const createScheduler = () => {
  let previous = 0

  return (fn: Step) => {
    requestAnimationFrame(dtms => {
      const dts = dtms / 1000

      fn(dts - previous)
      previous = dts
    })
  }
}
