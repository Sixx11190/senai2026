/*Atividades READ*/

/*introdução 1*/
USE vendas_informatica;
SELECT * FROM produto;

/*introdução 2*/
USE vendas_informatica;
SELECT nome_produto, marca, estoque FROM produto;

/*introdução 3*/
USE vendas_informatica;
SELECT nome_produto, categoria, preco_unitario, data_cadastro 
FROM produto ORDER BY marca ASC

/*introdução 4*/
USE vendas_informatica;
SELECT nome_produto, marca, estoque, data_cadastro 
FROM produto ORDER BY data_cadastro DESC

/*introdução 5*/
USE vendas_informatica;
SELECT * FROM cliente;

/*introdução 6*/
USE vendas_informatica;
SELECT nome_cliente, email, estado, cidade 
FROM cliente;

/*introdução 7*/
USE vendas_informatica;
SELECT nome_cliente, estado, cidade 
FROM cliente ORDER BY estado ASC

/*introdução 8*/
USE vendas_informatica;
SELECT nome_cliente, email, estado, data_cadastro 
FROM cliente ORDER BY data_cadastro ASC

/*introdução 9*/
USE vendas_informatica;
SELECT * FROM venda;

/*introdução 10*/
USE vendas_informatica;
SELECT cliente.nome_cliente, data_venda, forma_pagamento, preco_unitario_venda 
FROM venda 
INNER JOIN cliente ON venda.id_cliente = cliente.id_cliente;

/*introdução 11*/
USE vendas_informatica;
SELECT produto.nome_produto, data_venda, quantidade, status_venda
FROM venda 
INNER JOIN produto ON venda.id_produto = produto.id_produto;

/*introdução 12*/
USE vendas_informatica;
SELECT produto.nome_produto, preco_unitario_venda
FROM venda 
INNER JOIN produto ON venda.id_produto = produto.id_produto
WHERE forma_pagamento IN ("PIX", "Boleto");

/*introdução 13*/
USE vendas_informatica;
SELECT produto.nome_produto, cliente.nome_cliente, data_venda, quantidade
FROM venda 
INNER JOIN produto ON venda.id_produto = produto.id_produto
INNER JOIN cliente ON venda.id_cliente = cliente.id_cliente;

/*introdução 14*/
USE vendas_informatica;
SELECT produto.nome_produto, desconto_percentual, forma_pagamento
FROM venda 
INNER JOIN produto ON venda.id_produto = produto.id_produto
ORDER BY data_venda DESC;

/*introdução 15*/
USE vendas_informatica;
SELECT produto.nome_produto, cliente.nome_cliente, desconto_percentual, forma_pagamento, status_venda
FROM venda 
INNER JOIN produto ON venda.id_produto = produto.id_produto
INNER JOIN cliente ON venda.id_cliente = cliente.id_cliente
ORDER BY produto.nome_produto, cliente.nome_cliente, desconto_percentual, forma_pagamento ASC;

/*introdução 16*/
USE vendas_informatica;
SELECT produto.nome_produto, cliente.nome_cliente, desconto_percentual, forma_pagamento, status_venda, cliente.email, produto.marca, produto.categoria
FROM venda 
INNER JOIN produto ON venda.id_produto = produto.id_produto
INNER JOIN cliente ON venda.id_cliente = cliente.id_cliente
WHERE status_venda IN ("Cancelada", "Concluída")
ORDER BY preco_unitario_venda ASC;