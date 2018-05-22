// @flow

import Sequelize from "sequelize"

import { DbConfig } from "."

const { username, password, database, host, port } = DbConfig

const retry = {
  match: [
    Sequelize.ConnectionError,
    Sequelize.ConnectionRefusedError,
    Sequelize.ConnectionTimedOutError,
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
