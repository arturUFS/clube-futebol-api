const express = require('express');
const router = express.Router();
const clubeController = require('../controllers/clubeController');

// Rotas para Clube
router.post('/', clubeController.create);
router.get('/', clubeController.findAll);
router.get('/:nome', clubeController.findOne);
router.put('/:nome', clubeController.update);
router.delete('/:nome', clubeController.delete);

module.exports = router;