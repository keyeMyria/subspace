// @flow

import * as Hrtime from "./util/hrtime"

export const create = (rate: number) => {
  const nsPerTick = rate * Hrtime.NS_PER_SEC
  const hrTimeStep = [0, nsPerTick]

  let previous = process.hrtime()

  const timeoutHandler = done => () => {
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

  const schedule = (): Promise<number> =>
    new Promise(resolve => {
      setTimeout(timeoutHandler(resolve))
    })

  return schedule
}
