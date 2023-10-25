const Sequelize = require('sequelize');
const database = require('../../database/connection');

const Users = database.define('users', {
  username: {
    type: Sequelize.STRING,
    allowNull: false
  }, password: {
    type: Sequelize.STRING,
    allowNull: false
  }, email: {
    type: Sequelize.STRING,
    allowNull: false
  }, role: {
    type: Sequelize.NUMBER,
    allowNull: false
  }
});

module.exports = Users;