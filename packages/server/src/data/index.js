// @flow

import type { Options as SequelizeOptions } from "sequelize-cockroachdb"

import Sequelize from "sequelize-cockroachdb"

import * as models from "./model"

type $ExtractFunctionReturn = <V>(v: (...args: any) => V) => V
export type Db = $ObjMap<typeof models, $ExtractFunctionReturn>

type MakeOptions = {
  sequelize: SequelizeOptions,
}

export async function make(config: MakeOptions): Promise<Db> {
  const sequelize = new Sequelize(config.sequelize)
  const db: any = Object.entries(models).reduce(
    (acc, [modelName, modelDefinition]) => ({
      ...acc,
      [modelName]: sequelize.import(
        modelName,
        (modelDefinition: any),
      ),
    }),
    {},
  )

  await sequelize.sync()

  return db
}
