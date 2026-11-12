const db = require('../db');

const OcorrenciaController = {
  async listar(req, res) {
    try {
      const [rows] = await db.query(`
        SELECT o.*, u.nome as usuario_nome 
        FROM ocorrencia o 
        LEFT JOIN usuario u ON o.usuario_id = u.id
      `);
      res.json(rows);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async buscarPorId(req, res) {
    try {
      const { id } = req.params;
      const [rows] = await db.query(`
        SELECT o.*, u.nome as usuario_nome 
        FROM ocorrencia o 
        LEFT JOIN usuario u ON o.usuario_id = u.id 
        WHERE o.id = ?
      `, [id]);
      if (rows.length === 0) return res.status(404).json({ error: 'Ocorrência não encontrada' });
      res.json(rows[0]);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async criar(req, res) {
    try {
      const { titulo, descricao, status, usuario_id } = req.body;
      const [result] = await db.query(
        'INSERT INTO ocorrencia (titulo, descricao, status, usuario_id) VALUES (?, ?, ?, ?)',
        [titulo, descricao, status || 'Pendente', usuario_id]
      );
      res.status(201).json({ id: result.insertId, titulo, descricao, status, usuario_id });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const { titulo, descricao, status, usuario_id } = req.body;
      await db.query(
        'UPDATE ocorrencia SET titulo = ?, descricao = ?, status = ?, usuario_id = ? WHERE id = ?',
        [titulo, descricao, status, usuario_id, id]
      );
      res.json({ message: 'Ocorrência atualizada com sucesso' });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async deletar(req, res) {
    try {
      const { id } = req.params;
      await db.query('DELETE FROM ocorrencia WHERE id = ?', [id]);
      res.status(204).send();
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
};

module.exports = OcorrenciaController;