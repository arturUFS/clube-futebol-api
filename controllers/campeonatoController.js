const { Campeonato, Edicao } = require('../models');

exports.create = async (req, res) => {
  try {
    const campeonato = await Campeonato.create(req.body);
    res.status(201).json(campeonato);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const campeonatos = await Campeonato.findAll({
      include: {
        model: Edicao
      },
    });
    res.json(campeonatos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const campeonato = await Campeonato.findByPk(req.params.codigo, {
      include: {
        model: Edicao
      },
    });
    if (campeonato) {
      res.json(campeonato);
    } else {
      res.status(404).json({ error: 'Campeonato não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [updated] = await Campeonato.update(req.body, {
      where: { codigo: req.params.codigo },
    });
    if (updated) {
      const updatedCampeonato = await Campeonato.findByPk(req.params.codigo);
      res.json(updatedCampeonato);
    } else {
      res.status(404).json({ error: 'Campeonato não encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await Campeonato.destroy({
      where: { codigo: req.params.codigo },
    });
    if (deleted) {
      res.status(200).json({ message: 'Campeonato excluído com sucesso'});
    } else {
      res.status(404).json({ error: 'Campeonato não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};