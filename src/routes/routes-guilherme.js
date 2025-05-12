// routes-guilherme.js

const express = require('express');
const router = express.Router();

const AvaliacaoController = require('../controllers/avaliacao');
const LaboratorioController = require('../controllers/laboratorio');
const LoginController = require('../controllers/login');

// Routes para avaliacao
router.get('/avaliacao', AvaliacaoController.listarAvaliacao); // Listar avaliacao
router.post('/avaliacao', AvaliacaoController.cadastrarAvaliacao); // Cadastrar avaliacao
router.patch('/avaliacao', AvaliacaoController.editarAvaliacao); // Editar avaliacao
router.delete('/avaliacao', AvaliacaoController.apagarAvaliacao); // Apagar avaliacao

// Routes para laboratorio
router.get('/laboratorio', LaboratorioController.listarLaboratorio); // Listar laboratorio
router.post('/laboratorio', LaboratorioController.cadastrarLaboratorio); // Cadastrar laboratorio
router.patch('/laboratorio', LaboratorioController.editarLaboratorio); // Editar laboratorio
router.delete('/laboratorio', LaboratorioController.apagarLaboratorio); // Apagar laboratorio



module.exports = router;