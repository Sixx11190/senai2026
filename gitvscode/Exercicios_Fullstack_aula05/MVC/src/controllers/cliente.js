const clientes = require("../../dados/clientes.json");

const listar = (req, res) => {
    res.json(clientes);
};

const criar = (req, res) => { 
    const dados = req.body;
    dados.id = Number(clientes[clientes.length - 1].id) + 1;
    clientes.push(dados);
    res.status(201).json(dados);
}

const alterar = (req, res) => { 
    const id = req.params.id;
    const dados = req.body;

    const busca = clientes.find((cliente) => cliente.id == id)

    Object.keys(dados).forEach((i) => {
        busca[i] = dados[i];
    });
    res.send("alterado com sucesso!");
};

const excluir = (req, res) => { 
    id = req.params.id;

    clientes.forEach((dados, indice) => {
        if (dados.id == id) {
            clientes.splice(indice, 1);
        }
    });
    res.send("excluido com sucesso!");
}

module.exports = {
    criar, listar, alterar, excluir
}