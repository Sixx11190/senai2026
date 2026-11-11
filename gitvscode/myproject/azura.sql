CREATE DATABASE empresa_internacional;
USE empresa_internacional;

CREATE TABLE usuario (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(20) NOT NULL,
    email VARCHAR(50) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    senha VARCHAR(100) NOT NULL
);

CREATE TABLE produtos (
    id_produto INT AUTO_INCREMENT PRIMARY KEY,
    nome_produto VARCHAR(100) NOT NULL,
    marca VARCHAR(100) NOT NULL,
    qtd INT NOT NULL,
    cor INT NOT NULL,
    preco DECIMAL(10, 2) NOT NULL
);

CREATE TABLE compra (
    id_compra INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    id_produto INT NOT NULL,
    qtd_compra INT NOT NULL,
    data_compra DATE NOT NULL
);

CREATE TABLE financas (
    id_financas INT AUTO_INCREMENT PRIMARY KEY,
    valor_bruto DECIMAL(10, 2) NOT NULL,
    valor_liquido DECIMAL(10, 2) NOT NULL,
    valor_mensal DECIMAL(10, 2) NOT NULL
);