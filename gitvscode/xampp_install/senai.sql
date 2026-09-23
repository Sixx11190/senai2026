CREATE DATABASE db_senai;

USE db_senai;

CREATE TABLE cliente(
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nome_cliente VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    dt_nasc DATE NOT NULL
);

CREATE TABLE produto(
    id_produto INT PRIMARY KEY AUTO_INCREMENT,
    produto VARCHAR(100) NOT NULL,
    dt_entrega DATE NOT NULL,
    preco DECIMAL (10,2),
    qtd INT NOT NULL
);

CREATE TABLE venda(
    id_venda INT PRIMARY KEY AUTO_INCREMENT,
    id_cliente INT NOT NULL,
    dt_produto INT NOT NULL,
    dt_entrada DATE NOT NULL
);

INSERT INTO cliente (nome_cliente, email, dt_nasc) VALUES
("Michael Jackson", "m.jacksom@gmail.com", "1958-08-29");

INSERT INTO cliente (nome_cliente, email, dt_nasc) VALUES
("Julião P.P", "mh.tinho@gmail.com", "2024-06-01");

INSERT INTO cliente (nome_cliente, email, dt_nasc) VALUES
("Joardson", "joardsousa@gmail.com", "2024-06-01");