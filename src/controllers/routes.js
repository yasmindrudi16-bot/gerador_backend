const express = require('express');
const router = express.Router();

const usuarioController = require('./controllers/usuario');
const ocorrenciaController = require('./controllers/ocorrencia');

// Rotas de Usuário
router.get('/usuarios', usuarioController.listar);
router.get('/usuarios/:id', usuarioController.buscarPorId);
router.post('/usuarios', usuarioController.criar);
router.put('/usuarios/:id', usuarioController.atualizar);
router.delete('/usuarios/:id', usuarioController.deletar);

// Rotas de Ocorrência
router.get('/ocorrencias', ocorrenciaController.listar);
router.get('/ocorrencias/:id', ocorrenciaController.buscarPorId);
router.post('/ocorrencias', ocorrenciaController.criar);
router.put('/ocorrencias/:id', ocorrenciaController.atualizar);
router.delete('/ocorrencias/:id', ocorrenciaController.deletar);

module.exports = router;