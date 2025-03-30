const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Clube = sequelize.define('clube', {
  nome: {
    type: DataTypes.STRING(20),
    primaryKey: true,
    allowNull: false,
  },
  data_fundacao: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  sigla: {
    type: DataTypes.STRING(5),
    allowNull: false,
    unique: true,
  },
  simbolo: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
}, {
  tableName: 'clube',
  schema: "mydb",
  timestamps: false,
});

module.exports = Clube;