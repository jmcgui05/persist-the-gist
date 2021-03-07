const Sequelize = require('sequelize');

const database = new Sequelize({
  database: 'gist-postgres',
  dialect: 'postgres',
  operatorsAliases: Sequelize.Op
});

const Gists = database.define('gists', {
  id: { type: Sequelize.STRING, primaryKey: true },
  description: { type: Sequelize.STRING, allowNull: false },
  created_at: { type: Sequelize.STRING, allowNull: false },
  files: { type: Sequelize.JSON, allowNull: false }
});

module.exports = {
  Gists,
  database
}
