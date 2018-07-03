import redis from "redis"
import promisifyAll from "util-promisifyall"

import * as Redimension from "./redimension"
import config from "./redis.config"

promisifyAll(redis.RedisClient.prototype)
promisifyAll(redis.Multi.prototype)

describe("redimension", () => {
  let client
  let index

  beforeEach(async () => {
    client = redis.createClient(config)
    await client.delAsync("ss-test")
    index = Redimension.make(client, "ss-test", "ss-test-map", 2, 64)
  })

  it("supports 2-dimensional queries of indexed data", async () => {
    await index.insert([45, 120000], "Josh")
    await index.insert([50, 110000], "Pamela")
    await index.insert([30, 125000], "Angela")

    const results = await index.query([[40, 50], [100000, 115000]])

    expect(results.length).toBe(1)
    expect(results[0][1]).toBe("Pamela")
  })

  it("supports n-dimensional queries of indexed data", async () => {
    const index3d = Redimension.make(
      client,
      "ss-test",
      "ss-test-map",
      3,
      64,
    )
    await index3d.insert([25, 9, 100000], "Matt")
    await index3d.insert([33, 4, 770000], "Jane")
    await index3d.insert([56, 30, 230000], "Wendy")

    const res1 = await index3d.query([
      [18, 60],
      [4, 12],
      [50000, 100000],
    ])

    const res2 = await index3d.query([[0, 100], [0, 30], [0, 800000]])

    expect(res1.length).toBe(1)
    expect(res1[0][1]).toBe("Matt")

    expect(res2.length).toBe(3)
    expect(res2.map(r => r[1]).sort()).toEqual(
      ["Matt", "Jane", "Wendy"].sort(),
    )
  })

  it("supports removal of items", async () => {
    await index.insert([45, 120000], "Josh")
    await index.remove([45, 120000], "Josh")

    const results = await index.query([[0, 50], [100000, 130000]])

    expect(results.length).toBe(0)
  })

  it("supports removal of items by id", async () => {
    await index.insert([45, 120000], "Josh")
    await index.removeById("Josh")

    const results = await index.query([[0, 45], [100000, 120000]])

    expect(results.length).toBe(0)
  })

  afterAll(async () => {
    await client.delAsync("ss-test")
    await client.delAsync("ss-test-map")
    await client.quitAsync()
  })
})
