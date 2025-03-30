const { ParticipacaoEdicaoCampeonato, Clube, Edicao } = require('../models');

exports.create = async (req, res) => {
  try {
    const participacao = await ParticipacaoEdicaoCampeonato.create(req.body);
    res.status(201).json(participacao);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const participacoes = await ParticipacaoEdicaoCampeonato.findAll({
      include: [
        { model: Clube },
        { model: Edicao }
      ]
    });
    res.json(participacoes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const participacao = await ParticipacaoEdicaoCampeonato.findOne({
      where: {
        nome_clube: req.params.nome_clube,
        codigo_edicao: req.params.codigo_edicao
      },
      include: [
        { model: Clube },
        { model: Edicao }
      ]
    });
    if (participacao) {
      res.json(participacao);
    } else {
      res.status(404).json({ error: 'Participação não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [updated] = await ParticipacaoEdicaoCampeonato.update(req.body, {
      where: {
        nome_clube: req.params.nome_clube,
        codigo_edicao: req.params.codigo_edicao
      }
    });
    if (updated) {
      const updatedParticipacao = await ParticipacaoEdicaoCampeonato.findOne({
        where: {
          nome_clube: req.params.nome_clube,
          codigo_edicao: req.params.codigo_edicao
        }
      });
      res.json(updatedParticipacao);
    } else {
      res.status(404).json({ error: 'Participação não encontrada' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await ParticipacaoEdicaoCampeonato.destroy({
      where: {
        nome_clube: req.params.nome_clube,
        codigo_edicao: req.params.codigo_edicao
      }
    });
    if (deleted) {
      res.status(200).json({ message: 'Participação excluída com sucesso'});
    } else {
      res.status(404).json({ error: 'Participação não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};