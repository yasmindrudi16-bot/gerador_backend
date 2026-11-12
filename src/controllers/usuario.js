const db = require('../db');

const UsuarioController = {
  async listar(req, res) {
    try {
      const [rows] = await db.query('SELECT id, nome, email, criado_em FROM usuario');
      res.json(rows);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async buscarPorId(req, res) {
    try {
      const { id } = req.params;
      const [rows] = await db.query('SELECT id, nome, email, criado_em FROM usuario WHERE id = ?', [id]);
      if (rows.length === 0) return res.status(404).json({ error: 'Usuário não encontrado' });
      res.json(rows[0]);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async criar(req, res) {
    try {
      const { nome, email, senha } = req.body;
      const [result] = await db.query(
        'INSERT INTO usuario (nome, email, senha) VALUES (?, ?, ?)',
        [nome, email, senha]
      );
      res.status(201).json({ id: result.insertId, nome, email });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const { nome, email, senha } = req.body;
      await db.query(
        'UPDATE usuario SET nome = ?, email = ?, senha = ? WHERE id = ?',
        [nome, email, senha, id]
      );
      res.json({ message: 'Usuário atualizado com sucesso' });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async deletar(req, res) {
    try {
      const { id } = req.params;
      await db.query('DELETE FROM usuario WHERE id = ?', [id]);
      res.status(204).send();
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
};

module.exports = UsuarioController;