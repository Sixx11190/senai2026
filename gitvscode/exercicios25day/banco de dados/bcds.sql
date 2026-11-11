/*Exercicio 1 - Listar todos os produtos que começam com a letra D*/
SELECT * FROM produto WHERE nome_produto LIKE 'D%';

/*Exercicio 2 - Listar todos os produtos que começam com a letra E*/
SELECT nome_produto, marca, estoque FROM produto WHERE marca LIKE 'E%';

/*Exercicio 3 - Listar todos os produtos que contém a palavra Gamer*/
SELECT nome_produto, marca, preco_unitario FROM produto WHERE nome_produto LIKE '%Gamer%';

/*Exercicio 4 - Listar clientes que contém a sobrenome Barbosa*/
SELECT * FROM cliente WHERE nome_cliente LIKE '%Barbosa%';

/*Exercicio 5 - Listar clientes que começam com a letra C*/
USE vendas_informatica;
SELECT nome_cliente, venda.data_venda, forma_pagamento, produto.preco_unitario
FROM cliente 
JOIN venda ON cliente.id_cliente = venda.id_cliente
JOIN produto ON venda.id_produto = produto.id_produto
WHERE nome_cliente LIKE 'C%';

/*Exercicio 6 - Listar onde a forma de pagamento é PIX ou Boleto e o nome do produto contenha polegadas*/
SELECT nome_produto, preco_unitario, venda.id_venda, venda.forma_pagamento
FROM produto
JOIN venda ON produto.id_produto = venda.id_produto
WHERE forma_pagamento = 'PIX' OR forma_pagamento = 'Boleto' 
AND nome_produto LIKE '%Polegada';

/*Exercicio 7 - Listar nome do produto, preço, ID da venda e forma de pagamento em ordem alfabetica (crescente) por status da venda onde o nome do produto contenha "Placa" ou "Notebook" ou nome do cliente contenha o nome "Ana".*/
SELECT nome_produto, cliente.nome_cliente, venda.desconto_percentual, venda.forma_pagamento
FROM produto
JOIN venda ON produto.id_produto = venda.id_produto
JOIN cliente ON venda.id_cliente = cliente.id_cliente
WHERE nome_produto LIKE "%Placa%" OR nome_produto LIKE "%Notebook%" OR nome_cliente LIKE "%Ana%"
ORDER BY status_venda ASC;
