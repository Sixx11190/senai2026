const usuario = require("../models/usuario_models.js");

const cadastrar = async (req, res) => {
    try {
        const {nome, cpf, email, senha} = req.body;

        let retorno = await usuario.cadastrar(req.body);

        res.status(201).json(retorno).end();
    } catch (err) {
        res.status(500).json({ erro : err.message }).end();
    }
};

const listar = async (req, res) => {
    try {
        const usuarios = await usuario.listar();

        res.status(200).json(usuarios).end();
    } catch (err) {
        res.status(500).json({ erro : err.message }).end();
    }
};

const buscar = async (req, res) => {
    try {
        const id = req.params.id;
        const usuarioEncontrado = await usuario.buscar(id);

        if (usuarioEncontrado.length == 0) {
        res.status(404).json({ erro : "Usuário não encontrado" }).end();
        } else {
            res.status(200).json(usuarioEncontrado[0]).end();
        }
    } catch (err) {
        res.status(500).json({ erro : err.message }).end();
    }
};

const deletar = async (req, res) => {
    try {
        const id = req.params.id;
        const usuarioDeletado = await usuario.deletar(id);

        if(usuarioDeletado == 0){
            res.status(404).json({ erro : "Usuário não encontrado" }).end();
        } else {
            res.status(204).json({ mensagem : "Usuário deletado com sucesso" }).end();
        }

        res.status(200).json(usuarioDeletado).end();
    }catch (err) {
        res.status(500).json({ erro : err.message }).end();
    }
};

const atualizar = async (req, res) => {
    try {
        const id = req.params.id;
        const alterar = req.body;
        const usuarioAtualizado = await usuario.atualizar(id, alterar);
        res.status(200).json(usuarioAtualizado).end();
    }catch (err) {
        res.status(500).json({ erro : err.message }).end();
    }
};

const alterar = async (req, res) => {
    try {
        const id = req.params.id;
        const alterar = req.body;
        const usuarioAlterado = await usuario.alterar(id, alterar);
        res.status(200).json(usuarioAlterado).end();
    } catch (err) {
        res.status(500).json({ erro : err.message }).end();
    }
};

module.exports = {
    cadastrar,
    listar,
    buscar,
    deletar,
    atualizar,
    alterar
};