const { Sequelize } = require('sequelize')
const { DB_CONFIG } = require('./index')

const sequelize = new Sequelize({
  dialect: DB_CONFIG.dialect,
  storage: DB_CONFIG.storage
});

module.exports = sequelize