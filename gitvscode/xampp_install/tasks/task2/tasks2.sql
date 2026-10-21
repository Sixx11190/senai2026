/*segundo exercicio*/
/* 1 */
USE vendas_informatica;
UPDATE cliente SET cidade = 'Senailandia'
WHERE estado IN ("DF", "ES");

/* 2 */
USE vendas_informatica;
UPDATE cliente SET data_cadastro = '2026-01-01'
WHERE cidade IN ("Manaus");

/* 3 */
USE vendas_informatica;
UPDATE cliente SET nome_cliente = 'Michael Jackson'
WHERE id_cliente IN (10);

/* 4 */
USE vendas_informatica;
UPDATE produto SET nome_produto = "Notebook Lenovo IdeaPad 7"
WHERE id_produto IN (1);

/* 5 */
USE vendas_informatica;
UPDATE produto SET preco_unitario = 4999.99
WHERE marca IN ("DELL");

/* 6 */
USE vendas_informatica;
UPDATE venda SET desconto_percentual = 0.01
WHERE quantidade IN (2);