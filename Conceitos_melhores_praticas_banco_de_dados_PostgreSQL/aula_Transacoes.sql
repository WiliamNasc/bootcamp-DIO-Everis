SELECT numero, nome, ativo
FROM banco
ORDER BY numero;

UPDATE banco
SET ativo = FALSE
WHERE numero = 0;

-- TRANSAÇÕES

-- ROLLBACK
BEGIN; -- PODE SER EXECUTADO INDIVIDUALMENTE, OU EM CONJUNTO, PORÉM CONTINUA MARCANDO O INICIO DA TRANSAÇÃO
	UPDATE banco -- PODE SER EXECUTADO INDIVIDUALMENTE, OU EM CONJUNTO, PORÉM CONTINUA REALIZANDO O UPDATE
	SET ativo = true
	WHERE numero = 0;
	
	SELECT numero, nome, ativo
	FROM banco
	WHERE numero = 0;
ROLLBACK; -- PODE SER EXECUTADO INDIVIDUALMENTE, OU EM CONJUNTO, PORÉM CONTINUA MARCANDO O CANCELAMENTO DA TRANSAÇÃO

-- COMMIT
BEGIN;
	UPDATE banco
	SET ativo = true
	WHERE numero = 0;
COMMIT;

-- SAVEPOINT
SELECT id, gerente, nome
FROM funcionarios;

BEGIN;
	UPDATE funcionarios
	SET gerente = 2
	WHERE id = 3;
	
	SAVEPOINT save_point_funcionario;
		UPDATE funcionarios
		SET gerente = null;
	ROLLBACK TO save_point_funcionario;
	
	UPDATE funcionarios
	SET gerente = 3
	WHERE id = 5;
COMMIT;

