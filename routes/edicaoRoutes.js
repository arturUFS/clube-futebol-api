const express = require('express');
const router = express.Router();
const edicaoController = require('../controllers/edicaoController');

// Rotas para Edicao
router.post('/', edicaoController.create);
router.get('/', edicaoController.findAll);
router.get('/:codigo', edicaoController.findOne);
router.put('/:codigo', edicaoController.update);
router.delete('/:codigo', edicaoController.delete);

module.exports = router;