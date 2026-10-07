const itens = require("../../dados/itens.json");

const listar = (req, res) => {
    res.json(itens);
}

const criar = (req, res) => { 
    const dados = req.body;
    dados.id = Number(itens[itens.length - 1].id) + 1;
    itens.push(dados);
    res.status(201).json(dados);
}

const alterar = (req, res) => { 
    const id = req.params.id;
    const dados = req.body;

    const busca = itens.find((iten) =>iten.id == id);

    Object.keys(dados).forEach((i) => {
        busca[i] = dados[i];
    });
    res.send("alterado com sucesso!");
}

const excluir = (req, res) => { 
    id = req.params.id;

    itens.forEach((dados, indice) => {
        if (dados.id == id) {
            itens.splice(indice, 1);
        }
    });
    res.send("excluido com sucesso!");
}

module.exports = {
    criar, listar, alterar, excluir
}