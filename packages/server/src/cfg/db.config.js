// @flow

import * as Env from "../env"

const { username, password, database, host, port } = Env.DB

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
  sequelize: {
    username,
    password,
    database,
    host,
    port,
    dialect: "postgres",
    retry,
  },
}
