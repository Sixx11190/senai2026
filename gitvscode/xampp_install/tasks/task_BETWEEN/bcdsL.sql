/* BETWEEN */

USE vendas_informatica;
SELECT *
FROM produto
WHERE data_cadastro 
BETWEEN '2024-03-01' AND '2024-03-31';

USE vendas_informatica;
SELECT nome_produto, marca, estoque, data_cadastro
FROM produto
WHERE data_cadastro
BETWEEN '2024-01-01' AND '2024-03-01';

USE vendas_informatica;
SELECT *
FROM produto
WHERE data_cadastro
BETWEEN '2023-01-01' AND '2023-01-31';

USE vendas_informatica;
SELECT nome_cliente, email, cidade, estado, data_cadastro
FROM cliente
WHERE data_cadastro
BETWEEN '2023-05-01' AND '2023-05-15';

USE vendas_informatica;
SELECT *
FROM venda
WHERE data_venda
BETWEEN '2025-03-01' AND '2025-03-31'

USE vendas_informatica;
SELECT nome_cliente, venda.data_venda, venda.preco_unitario_venda, venda.forma_pagamento
FROM cliente
JOIN venda ON cliente.id_cliente = venda.id_cliente
WHERE venda.data_venda
BETWEEN '2024-12-24' AND '2024-01-15'
ORDER BY venda.preco_unitario_venda DESC 

USE vendas_informatica;
SELECT nome_cliente, email, produto.nome_produto, produto.marca, produto.categoria, 
venda.forma_pagamento, venda.data_venda, venda.status_venda
FROM cliente
INNER JOIN venda ON cliente.id_cliente = venda.id_cliente
INNER JOIN produto ON venda.id_produto = produto.id_produto
WHERE venda.status_venda IN ('Cancelado', 'Concluída') 
AND venda.data_venda BETWEEN '2025-10-01' AND '2025-10-31'
ORDER BY venda.preco_unitario_venda DESC;