const con = require('../config/db.js');

const cadastrar = async ({nome, idioma, quantidade}) => {

    const [result] = await con.query(
        "INSERT INTO filmes VALUES (DEFAULT, ?, ?, ?);", 
        [nome, idioma, quantidade]
    );
    return{
        id: result.insertId,
        nome: nome,
        idioma: idioma,
        quantidade: quantidade
    };
};

const listar = async () => {
    const [result] = await con.query(
        "SELECT * FROM filmes;"
    );
    return result;
};

module.exports = {
    cadastrar,
    listar
};