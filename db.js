const Sequelize = require('sequelize');

const sequelize = new Sequelize(
   'postgres',
   'postgres',
   'angst0437',
   {
      host: 'localhost',
      dialect: 'postgres',
   }
);

module.exports = sequelize;