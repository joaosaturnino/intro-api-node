const express = require('express');
const router = express.Router();

const FarmaciasController = require('../controllers/farmacias');
const PromocoesController = require('../controllers/promocoes');
const MedicamentosController = require('../controllers/medicamentos');
const FarmaceuticasController = require('../controllers/farmaceuticas');
const FuncionariosController = require('../controllers/funcionarios');





// Routes para farmácias
router.get('/farmacias', FarmaciasController.listarFarmacias);
router.post('/farmacias', FarmaciasController.cadastrarFarmacias);
router.patch('/farmacias', FarmaciasController.editarFarmacias);
router.delete('/farmacias', FarmaciasController.apagarFarmacias);

// Routes para medicamentos
router.get('/medicamentos', MedicamentosController.listarMedicamentos);
router.post('/medicamentos', MedicamentosController.cadastrarMedicamentos);
router.patch('/medicamentos', MedicamentosController.editarMedicamentos);
router.delete('/medicamentos', MedicamentosController.apagarMedicamentos);

// Routes para promoções
router.get('/promocoes', PromocoesController.listarPromocoes);
router.post('/promocoes', PromocoesController.cadastrarPromocoes);
router.patch('/promocoes', PromocoesController.editarPromocoes);
router.delete('/promocoes', PromocoesController.apagarPromocoes);

// Routes para farmaceuticas
router.get('/farmaceutica', FarmaceuticasController.listarFarmaceutica);
router.post('/farmaceutica', FarmaceuticasController.cadastrarFarmaceutica);
router.patch('/farmaceutica', FarmaceuticasController.editarFarmaceutica);
router.delete('/farmaceutica', FarmaceuticasController.apagarFarmaceutica);

// Routes para funcionarios
router.get('/funcionario', FuncionariosController.listarFuncionario);
router.post('/funcionario', FuncionariosController.cadastrarFuncionario);
router.patch('/funcionario', FuncionariosController.editarFuncionario);
router.delete('/funcionario', FuncionariosController.apagarFuncionario);


module.exports = router;
