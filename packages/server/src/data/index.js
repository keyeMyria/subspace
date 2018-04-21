// @flow

import bcrypt from "bcrypt"
import type { Model } from "sequelize-cockroachdb"
import Sequelize from "sequelize-cockroachdb"

import type {
  Body as BodyModel,
  Ship as ShipModel,
  ShipType as ShipTypeModel,
  Station as StationModel,
  Hangar as HangarModel,
  Inventory as InventoryModel,
  Item as ItemModel,
  ItemType as ItemTypeModel,
} from "@subspace/core"

import configs from "../../cfg/db.config"
import type { User as UserModel } from "../model/user"

const { NODE_ENV } = process.env

async function encryptPassword(password: String) {
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt, null)

  return hash
}

const config = configs[NODE_ENV]

export const sequelize = new Sequelize(config)

export const User: Class<Model<UserModel>> = sequelize.define(
  "User",
  {
    username: Sequelize.STRING,
    password: Sequelize.STRING,
  },
)

User.beforeCreate(async (user: UserModel) => {
  user.password = await encryptPassword(user.password)
})

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

export const ShipType: Class<Model<ShipTypeModel>> = sequelize.define(
  "ShipType",
  {
    name: Sequelize.STRING,
  },
)

export const Ship: Class<Model<ShipModel>> = sequelize.define(
  "Ship",
  {},
)

export const Inventory: Class<
  Model<InventoryModel>,
> = sequelize.define("Inventory", {})

export const ItemType: Class<Model<ItemTypeModel>> = sequelize.define(
  "ItemType",
  {
    name: Sequelize.STRING,
  },
)

export const Item: Class<Model<ItemModel>> = sequelize.define(
  "Item",
  {},
)

export const Station: Class<Model<StationModel>> = sequelize.define(
  "Station",
  {},
)

export const Hangar: Class<Model<HangarModel>> = sequelize.define(
  "Hangar",
  {},
)

User.hasOne(Ship, { as: "activeShip" })
User.hasMany(Hangar, { as: "hangars" })

Ship.belongsTo(Body, { as: "body" })
Ship.belongsTo(Inventory, { as: "inventory" })
Ship.belongsTo(ShipType, { as: "shipType" })
Ship.belongsTo(Hangar, { as: "hangar" })

Item.belongsTo(Inventory, { as: "inventory" })
Inventory.hasMany(Item, { as: "items" })

Item.belongsTo(ItemType, { as: "itemType" })

Station.hasMany(Hangar, { as: "hangars" })

Hangar.belongsTo(Station, { as: "station" })
Hangar.belongsTo(User, { as: "user" })
Hangar.hasMany(Ship, { as: "ships" })

export type Db = {
  sequelize: Sequelize,
  User: Class<Model<UserModel>>,
  Body: Class<Model<BodyModel>>,
  ShipType: Class<Model<ShipTypeModel>>,
  Ship: Class<Model<ShipModel>>,
  Inventory: Class<Model<InventoryModel>>,
  ItemType: Class<Model<ItemTypeModel>>,
  Item: Class<Model<ItemModel>>,
  Station: Class<Model<StationModel>>,
  Hangar: Class<Model<HangarModel>>,
}
