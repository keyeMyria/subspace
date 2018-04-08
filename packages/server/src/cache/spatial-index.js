// @flow

import redis from "redis"
import promisifyAll from "util-promisifyall"
import { Physics } from "@subspace/core"

import type { CreateOptions } from "redis"

import type { Middleware } from "../types"
import { create as createIndex } from "./redimension"
import type { SpatialIndex } from "./types"

promisifyAll(redis.RedisClient.prototype)
promisifyAll(redis.Multi.prototype)

type CreateIndexOptions = {
  redis: CreateOptions,
  key: string,
  dimensions: number,
  precision?: number,
}

export const create = (config: CreateIndexOptions) => {
  const client = redis.createClient(config.redis)
  const { key, dimensions, precision = 64 } = config

  return createIndex(client, key, `${key}-map`, dimensions, precision)
}
