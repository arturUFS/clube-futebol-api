const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Edicao = sequelize.define('edicao', {
  codigo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  ano: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  codigo_campeonato: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'edicao',
  schema: "mydb",
  timestamps: false,
});

module.exports = Edicao;