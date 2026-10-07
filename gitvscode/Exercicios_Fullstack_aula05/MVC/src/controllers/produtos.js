const produtos = require("../../dados/produtos.json");

const listar = (req, res) => {
    res.json(produtos);
}

const criar = (req, res) => { 
    const dados = req.body;
    dados.id = Number(produtos[produtos.length - 1].id) + 1;
    produtos.push(dados);
    res.status(201).json(dados);
}

const alterar = (req, res) => { 
    const id = req.params.id;
    const dados = req.body;

    const busca = produtos.find((produto) =>produto.id == id);

    Object.keys(dados).forEach((i) => {
        busca[i] = dados[i];
    });
    res.send("alterado com sucesso!");
}

const excluir = (req, res) => { 
    id = req.params.id;

    produtos.forEach((dados, indice) => {
        if (dados.id == id) {
            produtos.splice(indice, 1);
        }
    });
    res.send("excluido com sucesso!");
}

module.exports = {
    criar, listar, alterar, excluir
}

