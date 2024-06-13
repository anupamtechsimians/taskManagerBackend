const { Sequelize } = require('sequelize');
const db = require('./keys').db
const sequelize = new Sequelize(db.string,db.conf);

// test the database connection
sequelize.authenticate()
  .then(() => console.log('Database connection has been established successfully.'))
  .catch((error) => console.error('Unable to connect to the database:', error));
module.exports = sequelize;
