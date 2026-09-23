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
    id_produto INT NOT NULL,
    dt_entrada DATE NOT NULL
);

USE db_senai;

INSERT INTO cliente (nome_cliente, email, dt_nasc) VALUES
("Michael Jackson", "m.jacksom@gmail.com", "1920-03-22");

INSERT INTO cliente (nome_cliente, email, dt_nasc) VALUES
("Julião P.P", "mh.tinho@gmail.com", "1967-03-22");

INSERT INTO cliente (nome_cliente, email, dt_nasc) VALUES
("Joardson", "joardsousa@gmail.com", "2009-06-05");

SELECT * FROM cliente;

USE db_senai;

INSERT INTO produto (produto, dt_entrega, preco, qtd) VALUES
("Notebook Dell", "2026-10-05", 5000.45, 5);

INSERT INTO produto (produto, dt_entrega, preco, qtd) VALUES
("Sabão em pedra", "2026-10-23", 5.99, 100);

INSERT INTO produto (produto, dt_entrega, preco, qtd) VALUES
("Bicicreta Gamer", "2026-11-01", 20150.89, 320);

SELECT * FROM produto;

USE db_senai;

INSERT INTO venda (id_cliente, id_produto, dt_entrada) VALUES
(1, 1, "2026-06-25");

INSERT INTO venda (id_cliente, id_produto, dt_entrada) VALUES
(3, 2, "2022-07-24");

INSERT INTO venda (id_cliente, id_produto, dt_entrada) VALUES
(2, 3, "2002-11-23");

SELECT * FROM venda;

--- Criação de chave estrangeira para a tabela venda, referenciando a tabela cliente ---

ALTER TABLE venda
ADD CONSTRAINT fk_venda_cliente
FOREIGN KEY (id_cliente) 
REFERENCES cliente(id_cliente);

ALTER TABLE venda
ADD CONSTRAINT fk_venda_produto
FOREIGN KEY (id_produto) 
REFERENCES produto(id_produto);

