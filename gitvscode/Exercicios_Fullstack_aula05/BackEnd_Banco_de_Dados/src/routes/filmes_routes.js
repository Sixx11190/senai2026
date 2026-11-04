const express = require("express");
const routes = express.Router();

const filmesController = require("../controllers/filmes_controllers.js");

routes.post("/cadastrar", filmesController.cadastrar);
routes.get("/listar", filmesController.listar);
module.exports = routes;