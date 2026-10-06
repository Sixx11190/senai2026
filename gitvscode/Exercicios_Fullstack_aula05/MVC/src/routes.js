const express = require("express");
const routes = express.Router();

const Cliente = require("./controllers/cliente");
const Pedido = require("./controllers/pedido");

const rotaInicial = (req, res) => {
    res.json("API de Pedidos e Clientes");
}

routes.get("/", rotaInicial);

routes.post("/clientes", Cliente.criar);
routes.get("/clientes", Cliente.listar);
routes.put("/clientes/:id", Cliente.alterar);
routes.delete("/clientes/:id", Cliente.excluir);

routes.post("/pedidos", Pedido.criar);
routes.get("/pedidos", Pedido.listar);
routes.put("/pedidos/:id", Pedido.alterar);
routes.delete("/pedidos/:id", Pedido.excluir);

module.exports = routes;
