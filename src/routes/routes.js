const express = require('express');
const router = express.Router();

// Importando os controllers
const FarmaciasController = require('../controllers/farmacias');
const PromocoesController = require('../controllers/promocoes');
const MedicamentosController = require('../controllers/medicamentos');
const FarmaceuticasController = require('../controllers/farmaceuticas');
const FuncionariosController = require('../controllers/funcionarios');
const AvaliacaoController = require('../controllers/avaliacao');
const LaboratorioController = require('../controllers/laboratorio');
const PrecoController = require('../controllers/precos');
const UsuarioController = require('../controllers/usuarios');

// Routes para farmácias
router.get('/farmacias', FarmaciasController.listarFarmacias); // Listar farmácias
router.post('/farmacias', FarmaciasController.cadastrarFarmacias); // Cadastrar farmácias
router.patch('/farmacias', FarmaciasController.editarFarmacias); // Editar farmácias
router.delete('/farmacias', FarmaciasController.apagarFarmacias); // Apagar farmácias

// Routes para medicamentos
router.get('/medicamentos', MedicamentosController.listarMedicamentos); // Listar medicamentos
router.post('/medicamentos', MedicamentosController.cadastrarMedicamentos); // Cadastrar medicamentos
router.patch('/medicamentos', MedicamentosController.editarMedicamentos); // Editar medicamentos
router.delete('/medicamentos', MedicamentosController.apagarMedicamentos); // Apagar medicamentos

// Routes para promoções
router.get('/promocoes', PromocoesController.listarPromocoes); // Listar promoções
router.post('/promocoes', PromocoesController.cadastrarPromocoes); // Cadastrar promoções
router.patch('/promocoes', PromocoesController.editarPromocoes); // Editar promoções
router.delete('/promocoes', PromocoesController.apagarPromocoes); // Apagar promoções

// Routes para farmaceuticas
router.get('/farmaceutica', FarmaceuticasController.listarFarmaceutica); // Listar farmaceuticas
router.post('/farmaceutica', FarmaceuticasController.cadastrarFarmaceutica); // Cadastrar farmaceuticas
router.patch('/farmaceutica', FarmaceuticasController.editarFarmaceutica); // Editar farmaceuticas
router.delete('/farmaceutica', FarmaceuticasController.apagarFarmaceutica); // Apagar farmaceuticas

// Routes para funcionarios
router.get('/funcionario', FuncionariosController.listarFuncionario); // Listar funcionarios
router.post('/funcionario', FuncionariosController.cadastrarFuncionario); // Cadastrar funcionarios
router.patch('/funcionario', FuncionariosController.editarFuncionario); // Editar funcionarios
router.delete('/funcionario', FuncionariosController.apagarFuncionario); // Apagar funcionarios

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

// Routes para precos
router.get('/precos', PrecoController.listarPreco); // Listar precos
router.post('/precos', PrecoController.cadastrarPreco); // Cadastrar precos
router.patch('/precos', PrecoController.editarPreco); // Editar precos
router.delete('/precos', PrecoController.apagarPreco); // Apagar precos

// Routes para usuario
router.get('/usuarios', UsuarioController.listarUsuario); // Listar usuarios
router.post('/usuarios', UsuarioController.cadastrarUsuario); // Cadastrar usuarios
router.patch('/usuarios', UsuarioController.editarUsuario); // Editar usuarios
router.delete('/usuarios', UsuarioController.apagarUsuario); // Apagar usuarios

module.exports = router;