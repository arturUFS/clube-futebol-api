const { Sequelize } = require('sequelize');
const sequelize = require('../config/database');

const Clube = require('./clube');
const ParticipacaoEdicaoCampeonato = require('./participacaoEdicaoCampeonato');
const Edicao = require('./edicao');
const Campeonato = require('./campeonato');

// Defina as associações aqui
Edicao.belongsTo(Campeonato, { foreignKey: 'codigo_campeonato' });
Campeonato.hasMany(Edicao, { foreignKey: 'codigo_campeonato' });

// Associações para ParticipacaoEdicaoCampeonato
ParticipacaoEdicaoCampeonato.belongsTo(Clube, { foreignKey: 'nome_clube' });
Clube.hasMany(ParticipacaoEdicaoCampeonato, { foreignKey: 'nome_clube' });

ParticipacaoEdicaoCampeonato.belongsTo(Edicao, { foreignKey: 'codigo_edicao' });
Edicao.hasMany(ParticipacaoEdicaoCampeonato, { foreignKey: 'codigo_edicao' });

module.exports = {
  sequelize,
  Clube,
  ParticipacaoEdicaoCampeonato,
  Edicao,
  Campeonato,
};