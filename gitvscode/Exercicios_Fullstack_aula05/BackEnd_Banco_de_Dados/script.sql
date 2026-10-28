DROP DATABASE IF EXISTS locadora;
CREATE DATABASE locadora;

USE locadora;

CREATE TABLE usuarios (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(14) NOT NULL UNIQUE,
    email VARCHAR(70) NOT NULL UNIQUE,
    senha VARCHAR(10) NOT NULL
);

CREATE TABLE filmes (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR (30) NOT NULL UNIQUE,
    idioma VARCHAR (20) NOT NULL,
    quantidade INT NOT NULL
);

CREATE TABLE locacoes (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    data_locacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    data_devolucao TIMESTAMP NULL, 
    id_filme INT,
    id_usuario INT,
    CONSTRAINT fk_filmes_locacoes FOREIGN KEY (id_filme) REFERENCES filmes(id),
    CONSTRAINT fk_usuarios_locacoes FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

INSERT INTO usuarios VALUES 
(DEFAULT, "Elon Musca", "123.456.789-08", "Mosca@gmail.com", "666"),
(DEFAULT, "Bill Gaytes", "723.536.789-08", "Gay@gmail.com", "999");

INSERT INTO filmes VALUES
(DEFAULT, "Expresso", "portugues", 3),
(DEFAULT, "Inglorius Bastards", "ingles", 2);

INSERT INTO locacoes VALUES
(DEFAULT, DEFAULT, NULL, 2, 1);

INSERT INTO locacoes (id_usuario, id_filme) VALUES
(2, 1);