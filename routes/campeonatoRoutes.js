const express = require('express');
const router = express.Router();
const campeonatoController = require('../controllers/campeonatoController');

// Rotas para Campeonato
router.post('/', campeonatoController.create);
router.get('/', campeonatoController.findAll);
router.get('/:codigo', campeonatoController.findOne);
router.put('/:codigo', campeonatoController.update);
router.delete('/:codigo', campeonatoController.delete);

module.exports = router;