// @flow

import redis from "redis"
import promisifyAll from "util-promisifyall"
import * as Redimension from "@subspace/redimension"

import type { CreateOptions } from "redis"

promisifyAll(redis.RedisClient.prototype)
promisifyAll(redis.Multi.prototype)

type MakeOptions = {
  redis: CreateOptions,
  key: string,
  dimensions: number,
  precision?: number,
}

export function make(config: MakeOptions) {
  const client = redis.createClient(config.redis)
  const { key, dimensions, precision = 64 } = config

  return Redimension.make(
    client,
    key,
    `${key}-map`,
    dimensions,
    precision,
  )
}
