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

const listar = async () => {
    const [result] = await con.query(
        "SELECT * FROM usuarios;"
    );
    return result;
};

const buscar = async (id) => {
    const [result] = await con.query(
        "SELECT id, nome, email FROM usuarios WHERE id = ?;",
        [id]
    );
    return result;
};

const deletar = async (id) => {
    const [result] = await con.query(
        "DELETE FROM usuarios WHERE id = ?;",
        [id]
    );
    return result.affectedRows;
};

//PUT
const atualizar = async (id, {nome, cpf, email, senha}) => {
    const [result] = await con.query(
        "UPDATE usuarios SET nome = ?, cpf = ?, email = ?, senha = ? WHERE id = ?;",
        [nome, cpf, email, senha, id]
    );
    return result;
};

//PATCH
const alterar = async (id, {nome, cpf, email, senha}) => {
    const [result] = await con.query(
        "UPDATE usuarios SET nome = COALESCE(?, nome), cpf = COALESCE(?, cpf), email = COALESCE(?, email), senha = COALESCE(?, senha) WHERE id = ?;",
        [nome, cpf, email, senha, id]
    );
    return result;
};

module.exports = {
    cadastrar,
    listar,
    buscar,
    deletar,
    atualizar,
    alterar
};