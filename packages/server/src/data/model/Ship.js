// @flow

import type { Model, DataTypes } from "sequelize"
import type { Ship } from "@subspace/core"

import Sequelize from "sequelize-cockroachdb"

export default function(
  sequelize: Sequelize,
  dataTypes: DataTypes,
): Class<Model<Ship>> {
  const model = sequelize.define("Ship", {
    name: dataTypes.STRING,
    shipTypeId: dataTypes.STRING,
    bodyId: dataTypes.STRING,
  })

  model.associate = models => {
    model.belongsTo(models.ShipType, { foreignKey: "shipTypeId" })
    model.belongsTo(models.Body, { foreignKey: "bodyId" })
  }

  return model
}
