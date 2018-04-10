const Sequelize = require("sequelize")

const {
  DB_USERNAME,
  DB_PASSWORD,
  DB_NAME,
  DB_HOST,
  DB_PORT,
} = process.env

const retry = {
  match: [
    Sequelize.ConnectionError,
    Sequelize.ConnectionRefusedError,
    Sequelize.ConnectionTimedOutError,
    Sequelize.OptimisticLockError,
  ],
}

module.exports = {
  development: {
    username: "cockroach",
    password: null,
    database: "ss_dev",
    host: "127.0.0.1",
    port: 26257,
    dialect: "postgres",
    retry,
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
    retry,
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
    retry,
  },
}
