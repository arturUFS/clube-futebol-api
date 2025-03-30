const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');
const clubeRoutes = require('./routes/clubeRoutes');
const participacaoEdicaoCampeonatoRoutes = require('./routes/participacaoEdicaoCampeonatoRoutes');
const edicaoRoutes = require('./routes/edicaoRoutes');
const campeonatoRoutes = require('./routes/campeonatoRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/clubes', clubeRoutes);
app.use('/api/participacoes-edicoes', participacaoEdicaoCampeonatoRoutes);
app.use('/api/edicoes', edicaoRoutes);
app.use('/api/campeonatos', campeonatoRoutes);

// Testar conexão com o banco de dados
sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Erro ao conectar com o banco de dados:', err);
  });

// Tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo deu errado!');
});

module.exports = app;