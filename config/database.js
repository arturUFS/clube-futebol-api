const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
    ssl: {
        require: true,
        rejectUnauthorized: false,
    },
    define: {
      // ↓ Desativa sequences globalmente
      omitNull: true,
      sequelizeOptions: {
        disableSequelizeSequence: true
      }
    },
    // ↓ Opcional: Força o Sequelize a gerenciar os IDs
    autoIncrement: true
}
  }
);

module.exports = sequelize;