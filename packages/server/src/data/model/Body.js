// @flow

import type { Model, DataTypes } from "sequelize"
import type { Body } from "@subspace/core"

import Sequelize from "sequelize-cockroachdb"

export default function(
  sequelize: Sequelize,
  dataTypes: DataTypes,
): Class<Model<Body>> {
  return sequelize.define(
    "Body",
    {
      angle: dataTypes.FLOAT,
      angularVelocity: dataTypes.FLOAT,
      positionX: dataTypes.FLOAT,
      positionY: dataTypes.FLOAT,
      velocityX: dataTypes.FLOAT,
      velocityY: dataTypes.FLOAT,
      mass: dataTypes.FLOAT,
    },
    {
      getterMethods: {
        position() {
          return [this.positionX, this.positionY]
        },
        velocity() {
          return [this.velocityX, this.velocityY]
        },
      },
      setterMethods: {
        position([x: number, y: number]) {
          this.setDataValue("positionX", x)
          this.setDataValue("positionY", y)
        },
        velocity([x: number, y: number]) {
          this.setDataValue("velocityX", x)
          this.setDataValue("velocityY", y)
        },
      },
    },
  )
}
