const con = require('../config/db.js');

const cadastrar = async ({nome, cpf, email, senha}) => {

    const [result] = await con.query(
        "INSERT INTO usuarios VALUES (DEFAULT, ?, ?, ?, ?);", 
        [nome, cpf, email, senha]
    );
    return{
        id: result.insertId,
        nome: nome,
        cpf : cpf,
        email: email
    };
};

const listar = () => {};

const buscar = () => {};

const excluir = () => {};

//PUT
const atualizar = () => {};

//PATCH
const alterar = () => {};

module.exports = {
    cadastrar,
    listar,
    buscar,
    excluir,
    atualizar,
    alterar
};