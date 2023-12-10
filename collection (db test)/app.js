const Sequelize = require('sequelize');

const sequelize = new Sequelize(
   'postgres',
   'postgres',
   'angst0437',
   {
      dialect: 'postgres',
   }
);

sequelize
   .authenticate()
   .then(() => console.log('Connected.'))
   .catch((err) =>
      console.error('Connection error: ', err)
   );

sequelize
   .close()
   .then(() => console.log('Closed.'))
   .catch((err) =>
      console.error('Close connection error: ', err)
   );