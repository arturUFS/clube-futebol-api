const { Edicao, Campeonato } = require('../models');

exports.create = async (req, res) => {
  try {
    const edicao = await Edicao.create(req.body);
    res.status(201).json(edicao);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const edicoes = await Edicao.findAll({
      include: {
        model: Campeonato,
      },
    });
    res.json(edicoes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const edicao = await Edicao.findByPk(req.params.codigo, {
      include: {
        model: Campeonato,
      },
    });
    if (edicao) {
      res.json(edicao);
    } else {
      res.status(404).json({ error: 'Edição não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [updated] = await Edicao.update(req.body, {
      where: { codigo: req.params.codigo },
    });
    if (updated) {
      const updatedEdicao = await Edicao.findByPk(req.params.codigo);
      res.json(updatedEdicao);
    } else {
      res.status(404).json({ error: 'Edição não encontrada' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await Edicao.destroy({
      where: { codigo: req.params.codigo },
    });
    if (deleted) {
      res.status(200).json({ message: 'Edição excluída com sucesso'});
    } else {
      res.status(404).json({ error: 'Edição não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};