-- DICA: AO FAZER UMA FUNÇÃO, FAÇA ELA AOS POUCOS, E TESTE CADA PARTE, POIS FICA MAIS SIMPLES ENCONTRAR OS ERROS
------ Exemplo: função de soma
CREATE OR REPLACE FUNCTION fuc_somar (INTEGER, INTEGER)
RETURNS INTEGER
SECURITY DEFINER
--RETURNS NULL ON NULL INPUT
CALLED ON NULL INPUT
LANGUAGE SQL
AS
$$
	--SELECT $1 + $2;
	SELECT COALESCE ($1,0) + COALESCE ($2,0); -- Se o primeiro parâmetro (seja em '$1', ou '$2') for null, ele substitui por 0
$$;

SELECT fuc_somar(1,NULL); -- Funções são chamadas, dentro de um select

SELECT COALESCE (null, null, 'Daniel', 'Digital Innovation One');
-- COALESCE = RETORNA O PRIMEIRO VALOR, NÃO NULO, EM UMA LISTA

----- Fim exemplo

--- Exemplo de Função no projeto: adicionar bancos

CREATE OR REPLACE FUNCTION bancos_add (p_numero INTEGER, p_nome VARCHAR, p_ativo BOOLEAN)
RETURNS INTEGER
SECURITY INVOKER
LANGUAGE PLPGSQL
CALLED ON NULL INPUT
AS
$$
	DECLARE variavel_id INTEGER;
	
	BEGIN
		IF p_numero IS NULL OR p_nome IS NULL OR p_ativo IS NULL THEN
			RETURN 0;
		END IF;
		
		SELECT INTO variavel_id numero 
		FROM banco
		WHERE numero = p_numero;
		
		IF variavel_id IS NULL THEN
			INSERT INTO banco 
			(numero, nome, ativo)
			VALUES (p_numero, p_nome, p_ativo);
		ELSE
			RETURN variavel_id;
		END IF;
	
		SELECT INTO variavel_id numero 
		FROM banco
		WHERE numero = p_numero;
		
		RETURN variavel_id;
	END; -- Transações dentro de uma function, são encerradas com o alias END
$$;

SELECT bancos_add(5433, 'Banco Novo, em outra porta', true);

SELECT numero, nome, ativo
FROM banco
WHERE numero = 5232;

SELECT numero, nome, ativo
FROM banco
WHERE numero = 5432;

SELECT numero, nome, ativo
FROM banco
WHERE numero = 1000000;

SELECT numero, nome, ativo
FROM banco
WHERE numero = 5433;

--------- Fim exemplo


--- DESAFIO, FAZER FUNÇÕES, PARA INSERIR DADOS, NAS DEMAIS TABELAS (NÃO NECESSARIAMENTE EM TODAS), NO PROJETO
CREATE OR REPLACE FUNCTION func_adicionar_agencia
(agencia_banco_numero INTEGER,
 agencia_numero INTEGER,
 agencia_nome VARCHAR,
 agencia_ativo BOOLEAN)
RETURNS VARCHAR
SECURITY DEFINER
LANGUAGE PLPGSQL
CALLED ON NULL INPUT
AS
$$
	DECLARE variavel_banco_numero INTEGER;
	
	BEGIN
		IF	agencia_banco_numero IS NOT NULL AND
			agencia_numero IS NOT NULL AND
			agencia_nome IS NOT NULL AND
			agencia_ativo IS NOT NULL THEN
			
			SELECT INTO variavel_banco_numero banco_numero
			FROM agencia
			WHERE banco_numero = agencia_banco_numero;
		END IF;
		
		IF variavel_banco_numero IS NOT NULL THEN
			INSERT INTO agencia (banco_numero, numero, nome, ativo)
			VALUES (
				agencia_banco_numero,
				agencia_numero,
				agencia_nome,
				agencia_ativo
			);
			RETURN 'AGÊNCIA ADICIONADA COM SUCESSO !!!';
		ELSE
			RETURN 'FALHA AO INSERIR AGÊNCIA';
		END IF;
	END;
$$;

SELECT func_adicionar_agencia(1, 100, 'Agência Internaticional', FALSE);


CREATE OR REPLACE FUNCTION func_adicionar_cliente
(cliente_nome VARCHAR,
 cliente_email VARCHAR)
RETURNS VARCHAR
SECURITY DEFINER
LANGUAGE PLPGSQL
CALLED ON NULL INPUT
AS
$$
	BEGIN
		IF	cliente_nome IS NOT NULL AND
			cliente_email IS NOT NULL THEN
			
			INSERT INTO cliente (nome, email)
			VALUES (
				cliente_nome,
				cliente_email
			);
			RETURN 'CLIENTE ADICIONADO, COM SUCESSO !!!';
		ELSE
			RETURN 'FALHA AO INSERIR, CLIENTE';
		END IF;
	END;
$$;

SELECT func_adicionar_cliente('Wiliam Nascimento', 'meuemail@gmail.com');


