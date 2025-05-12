const express = require("express");
const router = express.Router();

const UsuarioController = require("../controllers/usuarios");

// Routes para usuario
router.get("/usuarios", UsuarioController.listarUsuario); // Listar usuarios
router.post("/usuarios", UsuarioController.cadastrarUsuario); // Cadastrar usuarios
router.patch("/usuarios", UsuarioController.editarUsuario); // Editar usuarios
router.delete("/usuarios", UsuarioController.apagarUsuario); // Apagar usuarios

module.exports = router;
