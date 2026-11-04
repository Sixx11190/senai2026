const filme = require("../models/filmes_models.js");

const cadastrar = async (req, res) => {
    try {
        const {nome, idioma, quantidade} = req.body;

        let retorno = await filme.cadastrar(req.body);
        res.status(201).json(retorno).end();
    } catch (err) {
        res.status(500).json({ erro : err.message }).end();
    }
};

const listar = async (req, res) => {
    try {
        const filmes = await filme.listar();
        res.status(200).json(filmes).end();
    } catch (err) {
        res.status(500).json({ erro : err.message }).end();
    }
};

module.exports = {
    cadastrar,
    listar
};