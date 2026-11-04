const express = require('express');

const routes = express.Router();

const usuarioController = require("../controllers/usuario_controller.js");

routes.post("/cadastrar", usuarioController.cadastrar);
routes.get("/listar", usuarioController.listar);
routes.get("/buscar/:id", usuarioController.buscar);
routes.delete("/deletar/:id", usuarioController.deletar);
routes.put("/atualizar/:id", usuarioController.atualizar);
routes.patch("/alterar/:id", usuarioController.alterar);
module.exports = routes;