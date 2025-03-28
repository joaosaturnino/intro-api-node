const express = require('express');
const router = express.Router();

const FarmaciasController = require('../controllers/farmacias');
const PromocoesController = require('../controllers/promocoes');
const MedicamentosController = require('../controllers/medicamentos');

router.get('/farmacias', FarmaciasController.listarFarmacias);
router.get('/promocoes', PromocoesController.listarPromocoes);
router.get('/medicamentos', MedicamentosController.listarMedicamentos);

module.exports = router;
