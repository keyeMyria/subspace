import Sequelize from "sequelize-cockroachdb"
import configs from "../../cfg/db.config"

const env = process.env.NODE_ENV || "development"
const config = configs[env]
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
)

const Player = sequelize.define("Player", {
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  activeShipId: Sequelize.INTEGER,
})

// Player.hasOne(models.Ship, { as: "ActiveShip", foreignKey: "activeShipId" })

export { sequelize, Player }
