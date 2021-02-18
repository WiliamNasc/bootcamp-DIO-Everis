SELECT numero, nome
FROM banco;

SELECT banco_numero, numero, nome
FROM agencia;

-- WITH STATEMENT
WITH tbl_temporaria_banco AS (
	SELECT numero, nome
	FROM banco
)
SELECT numero, nome
FROM tbl_temporaria_banco;

WITH params AS (
	SELECT 213 AS banco_numero
),	tbl_temporaria_banco AS (
	SELECT numero, nome
	FROM banco
	JOIN params
	ON params.banco_numero = banco.numero
)
SELECT numero, nome
FROM tbl_temporaria_banco;

WITH clientes_e_transacoes AS (
	SELECT 
		cliente.nome AS nome_cliente,
		tipo_transacao.nome AS titulo_transacao,
		cliente_transacoes.valor AS valor_transacao
	FROM cliente_transacoes
	JOIN cliente
	ON cliente.numero = cliente_transacoes.cliente_numero
	JOIN tipo_transacao
	ON tipo_transacao.id = cliente_transacoes.tipo_transacao_id
)
SELECT nome_cliente, titulo_transacao, valor_transacao
FROM clientes_e_transacoes
ORDER BY nome_cliente;

WITH clientes_e_transacoes_itau AS (
	SELECT 
		cliente.nome AS nome_cliente,
		tipo_transacao.nome AS titulo_transacao,
		cliente_transacoes.valor AS valor_transacao
	FROM cliente_transacoes
	JOIN cliente
	ON cliente.numero = cliente_transacoes.cliente_numero
	JOIN tipo_transacao
	ON tipo_transacao.id = cliente_transacoes.tipo_transacao_id
	JOIN banco
	ON banco.numero = cliente_transacoes.banco_numero
		AND banco.nome ILIKE '%itaú%' 
)
SELECT nome_cliente, titulo_transacao, valor_transacao
FROM clientes_e_transacoes_itau
ORDER BY nome_cliente;

-- SUB-SELECT
SELECT banco.numero, banco.nome
FROM banco
JOIN (
	SELECT 213 AS banco_numero
) params
ON params.banco_numero = banco.numero;