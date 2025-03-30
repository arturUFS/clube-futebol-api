const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ParticipacaoEdicaoCampeonato = sequelize.define('participacaoedicaocampeonato', {
  nome_clube: {
    type: DataTypes.STRING(20),
    primaryKey: true,
    allowNull: false,
    references: {
      model: 'clube',
      key: 'nome'
    }
  },
  codigo_edicao: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    references: {
      model: 'edicao',
      key: 'codigo'
    }
  },
  numero_jogos: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  classificacao: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
}, {
  tableName: 'participacaoedicaocampeonato',
  schema: "mydb",
  timestamps: false,
});

module.exports = ParticipacaoEdicaoCampeonato;