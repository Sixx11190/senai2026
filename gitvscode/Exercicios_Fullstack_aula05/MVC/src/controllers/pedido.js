const pedidos = require("../../dados/pedidos.json");

const listar = (req, res) => {
    Subtotais(pedidos);
    res.json(pedidos);
}

function Subtotais(pedidos) {
    pedidos.forEach((p) => {
        p.subtotais = p.quantidade * p.preco;
    });
}

const criar = (req, res) => { 
    const dados = req.body;
    dados.id = Number(pedidos[pedidos.length - 1].id) + 1;
    pedidos.push(dados);
    res.status(201).json(dados);
}

const alterar = (req, res) => { 
    id = req.params.id;
    dados = req.body;

    pedidos.forEach(pedidos => {
        if (pedidos.id == id) {
            pedidos.cliente_id = dados.cliente_id;
            pedidos.produto = dados.produto_id;
            pedidos.quantidade = dados.quantidade;
            pedidos.preco = dados.preco;
        }
    });
    res.send("alterado com sucesso!");


}

const excluir = (req, res) => { 
    id = req.params.id;

    pedidos.forEach((dados, indice) => {
        if (dados.id == id) {
            pedidos.splice(indice, 1);
        }
    });
    res.send("excluido com sucesso!");
}

module.exports = {
    criar, listar, alterar, excluir
}