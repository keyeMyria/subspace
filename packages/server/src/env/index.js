// @flow

import joi from "joi"

const {
  PORT,
  DB_HOST,
  DB_PORT,
  DB_NAME,
  DB_USERNAME,
  DB_PASSWORD,
  NODE_ENV,
  JWT_SECRET,
  JWT_EXPIRE,
  REDIS_HOST,
  REDIS_PORT,
  TICK_RATE,
  SEND_RATE,
} = process.env

const host = joi
  .string()
  .hostname()
  .required()

const alpha = joi
  .string()
  .alphanum()
  .required()

const schema = joi
  .object()
  .keys({
    PORT: alpha,
    DB_HOST: host,
    DB_PORT: alpha,
    DB_NAME: joi.string().required(),
    DB_USERNAME: alpha,
    DB_PASSWORD: joi.string().allow(""),
    NODE_ENV: joi
      .string()
      .valid("production", "development")
      .required(),
    JWT_SECRET: alpha,
    JWT_EXPIRE: alpha,
    REDIS_HOST: host,
    REDIS_PORT: alpha,
    TICK_RATE: alpha,
    SEND_RATE: alpha,
  })
  .unknown(true)

const result = joi.validate(process.env, schema)

if (result.error) {
  throw new Error(
    `Invalid environment configuration: ${result.error}`,
  )
}

export const App = {
  node: String(NODE_ENV),
  port: Number(PORT),
}

export const DB = {
  host: String(DB_HOST),
  port: Number(DB_PORT),
  database: String(DB_NAME),
  username: String(DB_USERNAME),
  password: String(DB_PASSWORD),
}

export const JWT = {
  secret: String(JWT_SECRET),
  expire: String(JWT_EXPIRE),
}

export const Redis = {
  host: String(REDIS_HOST),
  port: Number(REDIS_PORT),
}

export const Game = {
  tickRate: Number(TICK_RATE),
  sendRate: Number(SEND_RATE),
}
