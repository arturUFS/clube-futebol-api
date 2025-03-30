const express = require('express');
const router = express.Router();
const participacaoController = require('../controllers/participacaoEdicaoCampeonatoController');

// Rotas para ParticipacaoEdicaoCampeonato
router.post('/', participacaoController.create);
router.get('/', participacaoController.findAll);
router.get('/:nome_clube/:codigo_edicao', participacaoController.findOne);
router.put('/:nome_clube/:codigo_edicao', participacaoController.update);
router.delete('/:nome_clube/:codigo_edicao', participacaoController.delete);

module.exports = router;