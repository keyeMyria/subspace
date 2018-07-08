// @flow

import type { Model, DataTypes } from "sequelize"

import bcrypt from "bcrypt"
import Sequelize from "sequelize-cockroachdb"

import type { User } from "../../model"

async function encryptPassword(password: String) {
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt, null)

  return hash
}

export default function(
  sequelize: Sequelize,
  dataTypes: DataTypes,
): Class<Model<User>> {
  const model = sequelize.define("User", {
    activeShipId: dataTypes.STRING,
    username: dataTypes.STRING,
    password: dataTypes.STRING,
  })

  model.prototype.toJSON = function() {
    const obj = Object.assign({}, this.dataValues)
    delete obj.password
    return obj
  }

  model.beforeCreate(async (user: any) => {
    user.password = await encryptPassword(user.password)
  })

  model.associate = models =>
    model.belongsTo(models.Ship, { foreignKey: "activeShipId" })

  return model
}
