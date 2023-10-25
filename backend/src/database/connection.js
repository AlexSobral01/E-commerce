const Sequelize = require('sequelize');

const connection = new Sequelize('e-commerce', 'root', '04177110', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = connection;