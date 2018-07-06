import redis from "redis"
import promisifyAll from "util-promisifyall"

import * as Redimension from "./redimension"

promisifyAll(redis.RedisClient.prototype)
promisifyAll(redis.Multi.prototype)

const test = async (dim: number, n: number, size: number) => {
  const client = redis.createClient()
  await client.delAsync("ss-test")
  const index = Redimension.create(
    client,
    "ss-test",
    "ss-test-map",
    dim,
    64,
  )
  const dataset = []

  let totalDuration = 0

  for (let id = 0; id < n; id++) {
    const vars = []
    for (let d = 0; d < dim; d++) {
      vars.push(Math.floor(Math.random() * size))
    }
    dataset.push([vars, String(id)])
    index.insert(vars, id)
  }

  for (let i = 0; i < n; i++) {
    const query = []

    for (let d = 0; d < dim; d++) {
      const s = Math.floor(Math.random() * n)
      const e = Math.floor(Math.random() * n)

      query.push([Math.min(s, e), Math.max(s, e)])
    }

    const start = Date.now()
    const res1 = await index.query(query)
    const end = Date.now()

    totalDuration += end - start

    const res2 = dataset.filter(data => {
      for (let d = 0; d < dim; d++) {
        if (data[0][d] < query[d][0] || data[0][d] > query[d][1]) {
          return false
        }
      }
      return true
    })

    const sort = arr => {
      arr.sort((a, b) => {
        for (let i = 0; i < a.length; i++) {
          if (a[0][i] > b[0][i]) {
            return 1
          } else if (a[0][i] < b[0][i]) {
            return -1
          }
        }
        return 0
      })
    }
    const results = [res1, res2]

    results.forEach(sort)

    if (String(res1) !== String(res2)) {
      throw new Error(`\n${res1} != \n${res2}`)
    }
  }
  await client.delAsync("ss-test")
  await client.delAsync("ss-test-map")

  console.log(
    `Avg query duration for ${dim} dimensions and ${n} items: ${totalDuration /
      1000 /
      n}s`,
  )
}

const main = async () => {
  await test(2, 5000, 10000)
  // Not working
  // await test(4, 10000, 10000)

  process.exit()
}

main()
