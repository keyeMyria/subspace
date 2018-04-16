// @flow

import bcrypt from "bcrypt"
import type { Model } from "sequelize-cockroachdb"
import Sequelize from "sequelize-cockroachdb"

import type {
  Body as BodyModel,
  Ship as ShipModel,
} from "@subspace/core"

import configs from "../../cfg/db.config"
import type { User as UserModel } from "../model/user"

const env = process.env.NODE_ENV || "development"
const config = configs[env]
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
)

export const User: Class<Model<UserModel>> = sequelize.define(
  "User",
  {
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    activeShipId: Sequelize.INTEGER,
  },
)

User.beforeCreate(async (user: UserModel) => {
  user.password = await encryptPassword(user.password)
})

async function encryptPassword(password: String) {
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt, null)

  return hash
}

export const Ship: Class<Model<ShipModel>> = sequelize.define(
  "Ship",
  {
    bodyId: Sequelize.INTEGER,
  },
)

User.hasOne(Ship, { as: "activeShip", foreignKey: "activeShipId" })

export const Body: Class<Model<BodyModel>> = sequelize.define(
  "Body",
  {
    angle: Sequelize.FLOAT,
    angularVelocity: Sequelize.FLOAT,
    positionX: Sequelize.FLOAT,
    positionY: Sequelize.FLOAT,
    velocityX: Sequelize.FLOAT,
    velocityY: Sequelize.FLOAT,
    width: Sequelize.FLOAT,
    height: Sequelize.FLOAT,
  },
)

Ship.hasOne(Body, { as: "body", foreignKey: "bodyId" })

const db = { sequelize, User, Ship, Body }

export type Db = typeof db

export default db
