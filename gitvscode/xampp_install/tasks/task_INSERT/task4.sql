/*Ex 1*/
INSERT INTO cliente (nome_cliente, email, cidade, estado)
VALUES ("Rubervaldo Sesiano", "ruber.sesi@gmail.com", "Jaguaríuna", "São Paulo");
/*Ex 2*/
INSERT INTO produto (nome_produto, categoria, marca, preco_unitario, ativo, data_cadastro)
VALUES ("MousePad 5POL", "Acessórios", "Lumix", 59.98, 35, "Ativo", "vigente");
/*Ex 3*/
INSERT INTO venda (id_produto, id_cliente, data_venda, quantidade, preco_unitario_venda, desconto_percentual, forma_pagamento, status_venda)
VALUES (21, 101, "2026-10-21", 10, 599.80, 1.33, "PIX", "Concluida");