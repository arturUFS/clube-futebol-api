const { Clube } = require('../models');

// Criar um novo clube
exports.create = async (req, res) => {
  try {
    const clube = await Clube.create(req.body);
    res.status(201).json(clube);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Listar todos os clubes
exports.findAll = async (req, res) => {
  try {
    const clubes = await Clube.findAll();
    res.json(clubes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obter um clube pelo nome
exports.findOne = async (req, res) => {
  try {
    const clube = await Clube.findByPk(req.params.nome);
    if (clube) {
      res.json(clube);
    } else {
      res.status(404).json({ error: 'Clube não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Atualizar um clube
exports.update = async (req, res) => {
  try {
    const [updated] = await Clube.update(req.body, {
      where: { nome: req.params.nome },
    });
    if (updated) {
      const updatedClube = await Clube.findByPk(req.params.nome);
      res.json(updatedClube);
    } else {
      res.status(404).json({ error: 'Clube não encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Deletar um clube
exports.delete = async (req, res) => {
  try {
    const deleted = await Clube.destroy({
      where: { nome: req.params.nome },
    });
    if (deleted) {
      res.status(200).json({ message: 'Clube excluído com sucesso'});
    } else {
      res.status(404).json({ error: 'Clube não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};