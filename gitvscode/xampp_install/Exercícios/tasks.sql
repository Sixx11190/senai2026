/*Atividades READ*/

/*introdução 1*/

USE vendas_informatica;
SELECT * FROM produto;

USE vendas_informatica;
SELECT nome_produto, marca, estoque FROM produto;

USE vendas_informatica;
SELECT nome_produto, categoria, preco_unitario, data_cadastro 
FROM produto ORDER BY marca ASC

USE vendas_informatica;
SELECT nome_produto, marca, estoque, data_cadastro 
FROM produto ORDER BY data_cadastro DESC

USE vendas_informatica;
SELECT * FROM cliente;

USE vendas_informatica;
SELECT nome_cliente, email, estado, cidade 
FROM cliente;

USE vendas_informatica;
SELECT nome_cliente, estado, cidade 
FROM cliente ORDER BY estado ASC

USE vendas_informatica;
SELECT nome_cliente, email, estado, data_cadastro 
FROM cliente ORDER BY data_cadastro ASC

USE vendas_informatica;
SELECT * FROM venda;

USE vendas_informatica;
SELECT cliente.nome_cliente, data_venda, forma_pagamento, preco_unitario_venda 
FROM venda 
INNER JOIN cliente ON venda.id_cliente = cliente.id_cliente;

USE vendas_informatica;
SELECT produto.nome_produto, data_venda, quantidade, status_venda
FROM venda 
INNER JOIN produto ON venda.id_produto = produto.id_produto;

USE vendas_informatica;
SELECT produto.nome_produto, preco_unitario_venda
FROM venda 
INNER JOIN produto ON venda.id_produto = produto.id_produto
WHERE forma_pagamento IN ("PIX", "Boleto");

USE vendas_informatica;
SELECT produto.nome_produto, cliente.nome_cliente, data_venda, quantidade
FROM venda 
INNER JOIN produto ON venda.id_produto = produto.id_produto
INNER JOIN cliente ON venda.id_cliente = cliente.id_cliente;

USE vendas_informatica;
SELECT produto.nome_produto, desconto_percentual, forma_pagamento
FROM venda 
INNER JOIN produto ON venda.id_produto = produto.id_produto
ORDER BY data_venda DESC;

USE vendas_informatica;
SELECT produto.nome_produto, cliente.nome_cliente, desconto_percentual, forma_pagamento, status_venda
FROM venda 
INNER JOIN produto ON venda.id_produto = produto.id_produto
INNER JOIN cliente ON venda.id_cliente = cliente.id_cliente
ORDER BY produto.nome_produto, cliente.nome_cliente, desconto_percentual, forma_pagamento ASC;

USE vendas_informatica;
SELECT produto.nome_produto, cliente.nome_cliente, desconto_percentual, forma_pagamento, status_venda, cliente.email, produto.marca, produto.categoria
FROM venda 
INNER JOIN produto ON venda.id_produto = produto.id_produto
INNER JOIN cliente ON venda.id_cliente = cliente.id_cliente
WHERE status_venda IN ("Cancelada", "Concluída")
ORDER BY preco_unitario_venda ASC;





