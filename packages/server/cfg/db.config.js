// @flow

import { DbConfig } from "."

const { username, password, database, host, port } = DbConfig

const retry = {
  match: [
    "SequelizeConnectionError",
    "SequelizeConnectionRefusedError",
    "SequelizeHostNotFoundError",
    "SequelizeHostNotReachableError",
    "SequelizeInvalidConnectionError",
    "SequelizeConnectionTimedOutError",
  ],
}

export default {
  username,
  password,
  database,
  host,
  port,
  dialect: "postgres",
  retry,
}
