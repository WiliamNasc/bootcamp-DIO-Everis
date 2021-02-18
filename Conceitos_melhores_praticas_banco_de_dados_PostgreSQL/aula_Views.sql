SELECT numero, nome, ativo
FROM banco;

-- VIEWS

-- OR REPLACE
CREATE OR REPLACE VIEW vw_bancos
AS (
	SELECT numero, nome, ativo
	FROM banco
);

SELECT numero, nome, ativo
FROM vw_bancos;

CREATE OR REPLACE VIEW vw_bancos_com_parametros (banco_numero, banco_nome, banco_ativo)
AS (
	SELECT numero, nome, ativo
	FROM banco
);

SELECT banco_numero, banco_nome, banco_ativo
FROM vw_bancos_com_parametros;

INSERT INTO vw_bancos_com_parametros
(banco_numero, banco_nome, banco_ativo)
VALUES (
	51, 'Banco Boa Idéia', TRUE
);

SELECT banco_numero, banco_nome, banco_ativo
FROM vw_bancos_com_parametros
WHERE banco_numero = 51;

SELECT numero, nome, ativo
FROM banco
WHERE numero = 51;

UPDATE vw_bancos_com_parametros
SET banco_ativo = FALSE
WHERE banco_numero = 51;

DELETE FROM vw_bancos_com_parametros
WHERE banco_numero = 51;

-- TEMPORARY (a VIEW, só existirá, na sessão que ela foi criada, ou seja, se abrirmos outra aba no QUERY TOOL, e fizermos um select em uma VIEW TEMPORARY, irá constar um erro, dizendo que a VIEW não existe)
CREATE OR REPLACE TEMPORARY VIEW vw_agencia
AS (
	SELECT nome
	FROM agencia
);

SELECT nome
FROM vw_agencia;

-- RECURSIVE
CREATE TABLE IF NOT EXISTS funcionarios (
	id SERIAL,
	nome VARCHAR(50),
	gerente INTEGER,
	PRIMARY KEY (id),
	FOREIGN KEY (gerente)
	REFERENCES funcionarios (id)
);

INSERT INTO funcionarios
(nome, gerente)
VALUES ('Ancelmo', null);

INSERT INTO funcionarios
(nome, gerente)
VALUES ('Beatriz', 1);

INSERT INTO funcionarios
(nome, gerente)
VALUES ('Magno', 1);

INSERT INTO funcionarios
(nome, gerente)
VALUES ('Cremilda', 2);

INSERT INTO funcionarios
(nome, gerente)
VALUES ('Wagner', 4);

-- EXEMPLO, DE COMO FUNCIONA, MAIS OU MENOS, A VIEW RECURSIVA
-- SELECT nome, gerente
-- FROM funcionarios
-- WHERE gerente IS NULL
-- UNION ALL
-- SELECT nome, gerente
-- FROM funcionarios
-- WHERE id = 999;
-- FIM EXEMPLO

CREATE OR REPLACE RECURSIVE VIEW vw_func (id, gerente, funcionario)
AS (
	SELECT id, gerente, nome
	FROM funcionarios
	WHERE gerente IS NULL
	
	UNION ALL
	
	SELECT funcionarios.id, funcionarios.gerente, funcionarios.nome
	FROM funcionarios
	JOIN vw_func
	ON vw_func.id = funcionarios.gerente
);

SELECT id, gerente, funcionario
FROM vw_func;


-- WITH OPTIONS

-- WITH LOCAL CHECK OPTIONS
CREATE OR REPLACE VIEW vw_bancos_ativos
AS (
	SELECT numero, nome, ativo
 	FROM banco
 	WHERE ativo = TRUE
)
WITH LOCAL CHECK OPTION;

SELECT numero, nome, ativo
FROM vw_bancos_ativos;

INSERT INTO vw_bancos_ativos
(numero, nome, ativo)
VALUES(51, 'Banco Boa Idéia', FALSE); --Devolve um erro, pois o campo ativo não é TRUE

-- WITH CASCADED CHECK OPTIONS
CREATE OR REPLACE VIEW vw_bancos_ativos
AS (
	SELECT numero, nome, ativo
	FROM banco
	WHERE ativo = TRUE
);

CREATE OR REPLACE VIEW vw_bancos_com_a
AS (
	SELECT numero, nome, ativo
	FROM vw_bancos_ativos
	WHERE nome ILIKE 'a%'
)
WITH CASCADED CHECK OPTION;

SELECT numero, nome, ativo
FROM vw_bancos_com_a;

INSERT INTO vw_bancos_com_a
(numero, nome, ativo)
VALUES (333, 'Alfa Omega', true);

INSERT INTO vw_bancos_com_a
(numero, nome, ativo)
VALUES (331, 'Alfa Gama', false);

INSERT INTO vw_bancos_com_a
(numero, nome, ativo)
VALUES (332, 'Alfa Gama Beta', false);

-- DESAFIO, IMPLEMENTAR A VIEW RECURSIVA, RETORNANDO O NOME DO GERENTE
CREATE OR REPLACE RECURSIVE VIEW vw_func (id_funcionario, nome_funcionario, id_gerante, nome_gerente)
AS (
	SELECT
		id,
		nome,
		gerente,
		nome
	FROM funcionarios
	WHERE gerente IS NULL
	
	UNION ALL
	
	SELECT
		funcionarios.id,
		funcionarios.nome,
		funcionarios.gerente,
		vw_func.nome_funcionario
	FROM funcionarios
	JOIN vw_func
	ON vw_func.id_funcionario = funcionarios.gerente
);

SELECT
	id_funcionario,
	nome_funcionario,
	id_gerante,
	nome_gerente
FROM vw_func;

-- LÓGICA DESAFIO
-- CREATE OR REPLACE VIEW vw_gerente_funcionarios
-- AS (
-- 	SELECT id, gerente, nome
-- 	FROM funcionarios
-- );

-- SELECT
-- 	id,
-- 	nome,
-- 	gerente,
-- 	nome
-- FROM funcionarios
-- WHERE funcionarios.gerente IS NULL

-- UNION ALL

-- SELECT 
-- 	vw_gerente_funcionarios.id,
-- 	vw_gerente_funcionarios.nome,
-- 	vw_gerente_funcionarios.gerente,
-- 	funcionarios.nome
-- FROM funcionarios
-- JOIN vw_gerente_funcionarios
-- ON vw_gerente_funcionarios.gerente = funcionarios.id;