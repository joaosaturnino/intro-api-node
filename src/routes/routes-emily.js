const express = require("express");
const router = express.Router();

// Importando os controllers

const FarmaceuticasController = require("../controllers/farmaceuticas");
const FuncionariosController = require("../controllers/funcionarios");

// Routes para farmaceuticas
router.get("/farmaceutica", FarmaceuticasController.listarFarmaceutica); // Listar farmaceuticas
router.post("/farmaceutica", FarmaceuticasController.cadastrarFarmaceutica); // Cadastrar farmaceuticas
router.patch(
  "/farmaceutica/:forma_id",
  FarmaceuticasController.editarFarmaceutica
); // Editar farmaceuticas
router.delete("/farmaceutica", FarmaceuticasController.apagarFarmaceutica); // Apagar farmaceuticas
router.get("/farmaceuticas", FarmaceuticasController.listarFormasParametros);


// Routes para funcionarios
router.get("/funcionario", FuncionariosController.listarFuncionario); // Listar funcionarios
router.post("/funcionario", FuncionariosController.cadastrarFuncionario); // Cadastrar funcionarios
router.patch("/funcionario", FuncionariosController.editarFuncionario); // Editar funcionarios
router.delete("/funcionario", FuncionariosController.apagarFuncionario); // Apagar funcionarios

module.exports = router;
