SELECT numero, nome
FROM banco;

SELECT banco_numero, numero, nome
FROM agencia;

SELECT numero, nome, email
FROM cliente;

SELECT banco_numero, agencia_numero, cliente_numero
FROM cliente_transacoes;

SELECT *
FROM conta_corrente;

SELECT *
FROM information_schema."columns"
WHERE table_name = 'banco'; -- Este SELECT, faz uma consulta nas informações do Schema, do banco de dados, e devolve toda todas as colunas pertinentes a tabela banco.

SELECT column_name, data_type
FROM information_schema."columns"
WHERE table_name = 'banco'; -- Este SELECT, faz uma consulta nas informações de Schema, do banco de dados, e devolve o nome e o tipo de dado, pertecente a cada coluna, da tabela banco.

-- FUNÇÕES DE AGREGAÇÃO

SELECT *
FROM cliente_transacoes;

-- AVG - traz a média de valores
SELECT AVG (valor)
FROM cliente_transacoes; -- Devolve a média de todos os valores da tabela

-- COUNT (HAVING) - contagem de dados (COUNT), condição de contagem (HAVING, que pode ser utilizado para eliminar a contagem, de registros duplicados)
SELECT COUNT (numero)
FROM cliente; -- Devolve a contagem, de quantos clientes estão registrados na tabela, de cliente.

SELECT COUNT (numero), email
FROM cliente
WHERE email ILIKE '%@gmail.com'
GROUP BY email; -- Devolve a contagem, clientes, que possuem '@gmail.com', registrados na tabela, não importando a forma como foi escrito (de maneira maiúscula, etc), um detalhe importante, é a utilização do GROUP BY, para conseguirmos agrupar as informações de emeail, juntamente, com as de numero

SELECT COUNT (id), tipo_transacao_id
FROM cliente_transacoes
GROUP BY tipo_transacao_id
HAVING COUNT (id) > 150; -- Devolve a contagem, de cada tipo de transação, realizada, pelos clientes, tendo uma contagem superior a um total de 150

-- MAX - Retorna o maior valor, de uma coluna
SELECT MAX (numero)
FROM cliente; -- Devolve o maior número de cliente, registrado na tabela

SELECT MAX (valor)
FROM cliente_transacoes; -- Devolve o maior valor de transação, realizado por um cliente

SELECT MAX (valor), tipo_transacao_id
FROM cliente_transacoes
GROUP BY tipo_transacao_id; -- Devolve o maior valor de transação, para cada tipo de transação, registrado no banco de dados

-- MIN - Retorna o menor valor, de uma coluna
SELECT MIN (numero)
FROM cliente; -- Devolve o menor número de cliente, registrado na tabela

SELECT MIN (valor)
FROM cliente_transacoes; -- Devolve o menor valor de transação, realizado por um cliente

SELECT MIN (valor), tipo_transacao_id
FROM cliente_transacoes
GROUP BY tipo_transacao_id; -- Devolve o menor valor de transação, para cada tipo de transação, registrado no banco de dados

-- SUM - Retorna a soma, de uma (ou, mais) coluna 
SELECT SUM (valor)
FROM cliente_transacoes; -- Devolve a soma, de todos valores, de transações, realizadas, pelos clientes, registrados na tabela 'cliente_transacoes'

SELECT SUM (valor), tipo_transacao_id
FROM cliente_transacoes
GROUP BY tipo_transacao_id; -- Devolve a soma, de cada tipo de transação realizada, pelos clientes, registrados na tabela 'cliente_transacoes'

SELECT SUM (valor), tipo_transacao_id
FROM cliente_transacoes
GROUP BY tipo_transacao_id
ORDER BY tipo_transacao_id ASC; -- Devolve a soma, de cada tipo de transação realizada, pelos clientes, registrados na tabela 'cliente_transacoes', e os ordena do menor id, para o maior

SELECT SUM (valor), tipo_transacao_id
FROM cliente_transacoes
GROUP BY tipo_transacao_id
ORDER BY tipo_transacao_id DESC; -- Devolve a soma, de cada tipo de transação realizada, pelos clientes, registrados na tabela 'cliente_transacoes', e os ordena do maior id, para o menor