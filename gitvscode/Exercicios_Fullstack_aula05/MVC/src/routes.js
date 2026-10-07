const express = require("express");
const routes = express.Router();

const Cliente = require("./controllers/cliente");
const Pedido = require("./controllers/pedido");
const Itens = require("./controllers/itens");
const Produtos = require("./controllers/produtos");

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

routes.post("/produtos", Produtos.criar);
routes.get("/produtos", Produtos.listar);
routes.put("/produtos/:id", Produtos.alterar);
routes.delete("/produtos/:id", Produtos.excluir);

module.exports = routes;
