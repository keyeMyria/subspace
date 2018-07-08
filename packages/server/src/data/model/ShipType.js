// @flow

import type { Model, DataTypes } from "sequelize"
import type { ShipType } from "@subspace/core"

import Sequelize from "sequelize-cockroachdb"

export default function(
  sequelize: Sequelize,
  dataTypes: DataTypes,
): Class<Model<ShipType>> {
  return sequelize.define("ShipType", {
    name: dataTypes.STRING,
  })
}
