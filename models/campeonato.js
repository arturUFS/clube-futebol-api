const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Campeonato = sequelize.define('campeonato', {
  codigo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  modelo: {
    type: DataTypes.ENUM('Pontos Corridos', 'Copa'),
    allowNull: false,
  },
  premicacao: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  organizador: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
}, {
  tableName: 'campeonato',
  schema: "mydb",
  timestamps: false,
  sequelizeOptions: { 
    disableSequelizeSequence: true 
  }
});

module.exports = Campeonato;