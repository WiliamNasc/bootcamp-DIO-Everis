SELECT numero, nome
FROM banco;

SELECT banco_numero, numero, nome
FROM agencia;

SELECT numero, nome
FROM cliente;

SELECT banco_numero, agencia_numero, numero, digito, cliente_numero
FROM conta_corrente;

SELECT id, nome
FROM tipo_transacao;

SELECT banco_numero, agencia_numero, conta_corrente_numero, conta_corrente_digito, cliente_numero, valor
FROM cliente_transacoes;

SELECT COUNT (1) FROM banco; -- total de bancos: 151, 'COUNT(1)' é uma boa prática, pois ele irá contar a quantidade de registros na tabela, ao invés de contar uma determinada coluna, com isso ganhamos mais desempenho, em nossas consultas, com este propósito.
SELECT COUNT (1) FROM agencia;

-- JOINS

-- JOIN
SELECT banco.numero, banco.nome, agencia.numero, agencia.nome
FROM banco
JOIN agencia
ON agencia.banco_numero = banco.numero; -- total de registros: 296, o JOIN devolve as agencias, que possuem um banco, registrado em sua tabela.

SELECT COUNT (banco.numero)
FROM banco
JOIN agencia
ON agencia.banco_numero = banco.numero; -- Devolve o total de registros, que se adequam a condição do JOIN

SELECT COUNT (DISTINCT banco.numero)
FROM banco
JOIN agencia
ON agencia.banco_numero = banco.numero; -- Conta o número de bancos, que possuem agências, DISTINCT a agrupar os dados, conforme o JOIN, sem que haja a necessidade, de usar o GROUP BY

-- LEFT JOIN
SELECT banco.numero, banco.nome, agencia.numero, agencia.nome
FROM banco
LEFT JOIN agencia
ON agencia.banco_numero = banco.numero; -- total de registros: 438, Devolve os bancos que possuem algum tipo de relacionamento, com agencia e banco, e outros que não possuem

SELECT agencia.numero, agencia.nome, banco.numero, banco.nome
FROM agencia
LEFT JOIN banco
ON banco.numero = agencia.banco_numero; --total de registros: 296, Devolve os bancos que possuem algum tipo de relacionamento, com agencia e banco, e outros que não possuem

-- RIGTH JOIN
SELECT agencia.numero, agencia.nome, banco.numero, banco.nome
FROM agencia
RIGHT JOIN banco
ON banco.numero = agencia.banco_numero; -- total de registros: 438, Devolve os bancos que possuem algum tipo de relacionamento, com banco e agencia, e outros que não possuem, aqui nós invertemos a ordem de comparação, colocando a tabela com mais registros do lado direito, para que fosse possível observar a falta de valores, entre o relacionamento

-- FULL JOIN
SELECT banco.numero, banco.nome, agencia.numero, agencia.nome
FROM banco
FULL JOIN agencia
ON agencia.banco_numero = banco.numero; -- total de registros: 438, Devolve todas as opções, seja com, ou sem relacionamento, o total continua o mesmo, perante os outros JOINS, pois não possuíamos nenhuma agência, sem banco

-- PREPARAÇÃO DE EXEMPLO, CROSS JOIN
CREATE TABLE IF NOT EXISTS teste_a
(
	id SERIAL PRIMARY KEY,
	valor VARCHAR(10)
);

CREATE TABLE IF NOT EXISTS teste_b
(
	id SERIAL PRIMARY KEY,
	valor VARCHAR(10)
);

INSERT INTO teste_a
(
	valor
)
VALUES (
	'teste1'
);

INSERT INTO teste_a
(
	valor
)
VALUES (
	'teste2'
);

INSERT INTO teste_a
(
	valor
)
VALUES (
	'teste3'
);

INSERT INTO teste_a
(
	valor
)
VALUES (
	'teste4'
);

INSERT INTO teste_b
(
	valor
)
VALUES (
	'teste_a'
);

INSERT INTO teste_b
(
	valor
)
VALUES (
	'teste_b'
);

INSERT INTO teste_b
(
	valor
)
VALUES (
	'teste_c'
);

INSERT INTO teste_b
(
	valor
)
VALUES (
	'teste_d'
);
-- FIM PREPARAÇÃO

-- CROSS JOIN
SELECT tbla.valor, tblb.valor
FROM teste_a tbla
CROSS JOIN teste_b tblb; -- Cria uma matriz, com todos valores, das tabelas envolvidas com o JOIN

DROP TABLE IF EXISTS teste_a;
DROP TABLE IF EXISTS teste_b;


-- JOIN, ENTRE 4 TABELAS
SELECT 
	banco.nome AS Banco,
	agencia.nome AS Agencia,
	conta_corrente.numero AS Numero_Conta_Corrente,
	conta_corrente.digito AS Digito_Conta_Corrente,
	cliente.nome AS Nome_Cliente
FROM banco
JOIN agencia
ON agencia.banco_numero = banco.numero
JOIN conta_corrente
ON conta_corrente.banco_numero = agencia.banco_numero -- poderia ser também: conta_corrente.banco_numero = banco.numero, podemos sempre comparar os valores com as tabelas a nossa esquerda (no caso banco, que está no from, em seguida agencia), no cenário de não encontrarmos um valor a relacionar, em uma tabela específica.
	AND conta_corrente.agencia_numero = agencia.numero
JOIN cliente
ON cliente.numero = conta_corrente.cliente_numero;

-- TESTE, INCLUIR NA CONSULTA ACIMA: AS TRANSAÇÕES, E OS TIPOS DE TRANSAÇÃO, DE CADA CLIENTE
SELECT 
	banco.nome AS Banco,
	agencia.nome AS Agencia,
	conta_corrente.numero AS Numero_Conta_Corrente,
	conta_corrente.digito AS Digito_Conta_Corrente,
	cliente.nome AS Nome_Cliente,
	cliente_transacoes.valor AS Valor_Transacao,
	tipo_transacao.nome AS Tipo_Transacao
FROM banco
JOIN agencia
ON agencia.banco_numero = banco.numero
JOIN conta_corrente
ON conta_corrente.banco_numero = agencia.banco_numero -- poderia ser também: conta_corrente.banco_numero = banco.numero, podemos sempre comparar os valores com as tabelas a nossa esquerda (no caso banco, que está no from, em seguida agencia), no cenário de não encontrarmos um valor a relacionar, em uma tabela específica.
	AND conta_corrente.agencia_numero = agencia.numero
JOIN cliente
ON cliente.numero = conta_corrente.cliente_numero
JOIN cliente_transacoes
ON cliente_transacoes.cliente_numero = cliente.numero
	AND cliente_transacoes.conta_corrente_numero = conta_corrente.numero
	AND cliente_transacoes.conta_corrente_digito = conta_corrente.digito
JOIN tipo_transacao
ON tipo_transacao.id = cliente_transacoes.tipo_transacao_id
ORDER BY cliente.nome ASC;

-- VERIFICANDO A RESOLUÇÃO DO TESTE, COM O CLIENTE: Abigail Belém
SELECT 
	cliente.nome as nome_cliente,
	cliente.numero as cliente_numero,
	cliente_transacoes.valor,
	tipo_transacao.nome
FROM cliente_transacoes
JOIN cliente
ON cliente_transacoes.cliente_numero = cliente.numero
JOIN tipo_transacao
ON tipo_transacao.id = cliente_transacoes.tipo_transacao_id
WHERE cliente.nome LIKE 'Abigail Belém';
	
	