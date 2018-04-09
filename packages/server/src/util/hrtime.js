// @flow

export const NS_PER_SEC = 1e9

type Hrtime = [number, number]

export function add(t1: Hrtime, t2: Hrtime) {
  return [t1[0] + t2[0], t1[1] + t2[1]]
}

export function sub(t1: Hrtime, t2: Hrtime) {
  return [t1[0] - t2[0], t1[1] - t2[1]]
}

export function sum(t: Hrtime) {
  return t[0] * NS_PER_SEC + t[1]
}

export function throttle(fn: Function, rate: number) {
  const nsPerTick = rate * NS_PER_SEC
  const hrTimeStep = [0, nsPerTick]

  let t0 = process.hrtime()
  let prevResult

  return (...args: any[]) => {
    // Get a high resolution diff
    const diff = process.hrtime(t0)
    // Subtract a full step from the diff
    const delta = sub(diff, hrTimeStep)
    // Convert to nanoseconds
    const d = sum(delta)

    if (d >= 0) {
      t0 = add(process.hrtime(), delta)
      prevResult = fn(...args)
    }

    return prevResult
  }
}
