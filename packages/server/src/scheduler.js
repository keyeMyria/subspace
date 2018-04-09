// @flow

import * as Hrtime from "./util/hrtime"

export function create(rate: number): () => Promise<number> {
  const nsPerTick = rate * Hrtime.NS_PER_SEC
  const hrTimeStep = [0, nsPerTick]

  let previous = process.hrtime()

  function timeoutHandler(done) {
    return () => {
      const diff = process.hrtime(previous)
      const delta = Hrtime.sub(diff, hrTimeStep)
      const d = Hrtime.sum(delta)

      if (d < 0) {
        setImmediate(timeoutHandler(done))
        return
      }

      done((d + nsPerTick) / Hrtime.NS_PER_SEC)

      previous = Hrtime.add(process.hrtime(), delta)
    }
  }

  return () =>
    new Promise(resolve => {
      setTimeout(timeoutHandler(resolve))
    })
}
