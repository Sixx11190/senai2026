/*Ex 1*/
DELETE FROM `cliente` WHERE id_cliente = 5;
/*Ex 2*/
DELETE FROM `cliente` WHERE estado = "SC";
/*Ex 3*/
DELETE FROM `produto` WHERE marca = "LG";
/*Ex 4*/
DELETE FROM `produto` WHERE id_produto IN (3, 5, 10);
/*Ex 5*/
DELETE FROM `venda` WHERE desconto_percentual = 0;
/*Ex 6*/
DELETE FROM `venda` WHERE status_venda = "Cancelada";