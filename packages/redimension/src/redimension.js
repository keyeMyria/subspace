// @flow

import type { RedisClientPromisified } from "redis"
import type { Redimension, Range, Values } from "./types"

const zip = (a: any[], b: any[]) => a.map((x, i) => [x, b[i]])
const int10 = (a: number | string) => parseInt(a, 10)

function flatten(arr, res = []) {
  const len = arr.length
  let i = 0
  let cur

  for (; i < len; i++) {
    cur = arr[i]
    if (Array.isArray(cur)) {
      flatten(cur, res)
    } else {
      res.push(cur)
    }
  }

  return res
}

function multi(
  client: RedisClientPromisified,
  cb: RedisClientPromisified => *,
) {
  // $FlowFixMe
  const m = client.multi()

  cb(m)

  return m.execAsync()
}

function batch(
  client: RedisClientPromisified,
  cb: RedisClientPromisified => *,
) {
  // $FlowFixMe
  const b = client.batch()

  cb(b)

  return b.execAsync()
}

function checkDimensions(
  values: $ReadOnlyArray<any>,
  dimensions: number,
) {
  if (values.length !== dimensions) {
    throw new Error(
      `Please always use ${dimensions} dimensions with this index.`,
    )
  }
}

function encode(
  values: Values,
  dimensions: number,
  precision: number,
) {
  const comb = values.reduce((a, x, i) => {
    const bin = x
      .toString(2)
      .padStart(precision, "0")
      .split("")

    return i === 0 ? bin : zip(a, bin)
  }, [])
  const interleaved = flatten(comb).join("")

  return int10(interleaved)
    .toString(16)
    .padStart(precision * dimensions / 4, "0")
}

export function make(
  client: RedisClientPromisified,
  key: string,
  hashkey: string,
  dimensions: number,
  precision: number = 64,
): Redimension {
  function buildElementString(values: Values, id: string) {
    checkDimensions(values, dimensions)

    const encoded = encode(values, dimensions, precision)
    const appended = values.reduce((a, x) => `${a}:${x}`, encoded)

    return `${appended}:${id}`
  }

  function insert(values: Values, id: string) {
    const ele = buildElementString(values, id)

    return multi(client, m => {
      // $FlowFixMe
      m.zadd(key, 0, ele)
      m.hset(hashkey, id, ele)
    })
  }

  function remove(values: Values, id: string) {
    const ele = buildElementString(values, id)
    // $FlowFixMe
    return client.zremAsync(key, ele)
  }

  async function removeById(id: string) {
    const ele = await client.hgetAsync(hashkey, id)

    if (!ele) {
      throw new Error(`Element ${id} not found.`)
    }

    return multi(client, m => {
      // $FlowFixMe
      m.zrem(key, ele)
      m.hdel(hashkey, id)
    })
  }

  async function update(values: Values, id: string) {
    const ele = buildElementString(values, id)
    const old = await client.hgetAsync(hashkey, id)

    if (!old) {
      throw new Error(`Element ${id} not found.`)
    }

    return multi(client, m => {
      // $FlowFixMe
      m.zrem(key, old)
      m.hdel(hashkey, id)
      // $FlowFixMe
      m.zadd(key, 0, ele)
      m.hset(hashkey, id, ele)
    })
  }

  async function queryRaw(range: Range[], exp: number) {
    const start = []
    const end = []
    const e = 2 ** exp

    for (let i = 0; i < range.length; i++) {
      const r = range[i]
      start.push(int10(r[0] / e))
      end.push(int10(r[1] / e))
    }

    const ranges = []
    const current = start.slice()
    let notDone = true

    while (notDone) {
      const rangeStart = []
      const rangeEnd = []

      for (let i = 0; i < dimensions; i++) {
        rangeStart.push(int10(current[i] * e))
        rangeEnd.push(int10(rangeStart[i] | (e - 1)))
      }

      ranges.push([
        `[${encode(rangeStart, dimensions, precision)}:`,
        `[${encode(rangeEnd, dimensions, precision)}:\xff`,
      ])

      for (let i = 0; i < dimensions; i++) {
        if (current[i] !== end[i]) {
          current[i] += 1
          break
        } else if (i === dimensions - 1) {
          notDone = false
        } else {
          current[i] = start[i]
        }
      }
    }

    const allResults = await batch(client, p => {
      for (let i = 0; i < ranges.length; i++) {
        const r = ranges[i]
        // $FlowFixMe
        p.zrangebylex(key, r[0], r[1])
      }
    })

    const results = []

    for (let r = 0; r < allResults.length; r++) {
      const result = allResults[r]

      for (let i = 0; i < result.length; i++) {
        const item = result[i]
        const fields = item.split(":")
        let skip = false

        for (let d = 0; d < dimensions; d++) {
          if (
            int10(fields[d + 1]) < range[d][0] ||
            int10(fields[d + 1]) > range[d][1]
          ) {
            skip = true
            break
          }
        }

        if (!skip) {
          const values = []
          const id = fields[fields.length - 1]

          for (let v = 1; v < fields.length - 1; v++) {
            values.push(int10(fields[v]))
          }

          results.push([values, id])
        }
      }
    }

    return results
  }

  function query(range: Range[]) {
    checkDimensions(range, dimensions)

    const ordered = range.map(r => {
      if (r[0] < r[1]) {
        return r
      }
      return [r[1], r[0]]
    })
    const deltas = ordered.map(r => r[1] - r[0] + 1)

    let delta = Math.min(...deltas)
    let exp = 1

    while (delta > 2) {
      delta /= 2
      exp += 1
    }

    while (true) {
      const size = 2 ** exp
      const d = ordered.map(
        r => int10(r[1] / size) - int10(r[0] / size) + 1,
      )

      const ranges = d.reduce((a, b) => a * b)

      if (ranges < 20) {
        break
      }

      exp += 1
    }

    return queryRaw(ordered, exp)
  }

  return {
    insert,
    remove,
    removeById,
    update,
    query,
  }
}
