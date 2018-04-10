// @flow

import type { Model } from "sequelize-cockroachdb"
import Sequelize from "sequelize-cockroachdb"

import type { Ship as ShipModel } from "@subspace/core"

import configs from "../../cfg/db.config"
import type { Player as PlayerModel } from "../model/player"

const env = process.env.NODE_ENV || "development"
const config = configs[env]
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
)

const Player: Class<Model<PlayerModel>> = sequelize.define("Player", {
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  activeShipId: Sequelize.INTEGER,
})

const Ship: Class<Model<ShipModel>> = sequelize.define("Ship", {
  bodyId: Sequelize.INTEGER,
})

const db = { sequelize, Player, Ship }

export type Db = typeof db

export default db

// Player.hasOne(models.Ship, { as: "ActiveShip", foreignKey: "activeShipId" })
// Ship.hasOne(models.Body, { as: "Body", foreignKey: "bodyId" })
