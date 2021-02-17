CREATE TABLE IF NOT EXISTS banco (
	numero INTEGER NOT NULL,
	nome VARCHAR(50) NOT NULL,
	ativo BOOLEAN NOT NULL DEFAULT TRUE, --boa prática , CAMPO DE CONTROLE
	data_criacao TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, --boa prática , CAMPO DE CONTROLE
	PRIMARY KEY (numero)
);

CREATE TABLE IF NOT EXISTS agencia (
	banco_numero INTEGER NOT NULL,
	numero INTEGER NOT NULL,
	nome VARCHAR(80) NOT NULL,
	ativo BOOLEAN NOT NULL DEFAULT TRUE, --boa prática , CAMPO DE CONTROLE
	data_criacao TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, --boa prática , CAMPO DE CONTROLE
	PRIMARY KEY (banco_numero, numero),
	FOREIGN KEY (banco_numero) REFERENCES banco (numero)
);

CREATE TABLE IF NOT EXISTS cliente (
	numero BIGSERIAL PRIMARY KEY, --O BIGSERIAL, gera numero iterativos (1,2,3..), de forma automática, ele é como se fosse o IDENTITY, do SQL SERVER
	nome VARCHAR(120) NOT NULL,
	email VARCHAR(250) NOT NULL,
	ativo BOOLEAN NOT NULL DEFAULT TRUE, --boa prática , CAMPO DE CONTROLE
	data_criacao TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP --boa prática , CAMPO DE CONTROLE
);

CREATE TABLE IF NOT EXISTS conta_corrente (
	banco_numero INTEGER NOT NULL,
	agencia_numero INTEGER NOT NULL,
	numero BIGINT NOT NULL,
	digito SMALLINT NOT NULL,
	cliente_numero BIGINT NOT NULL,
	ativo BOOLEAN NOT NULL DEFAULT TRUE, --boa prática , CAMPO DE CONTROLE
	data_criacao TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, --boa prática , CAMPO DE CONTROLE
	PRIMARY KEY (banco_numero,agencia_numero,numero,digito,cliente_numero),
	FOREIGN KEY (banco_numero,agencia_numero) REFERENCES agencia (banco_numero,numero),
	FOREIGN KEY (cliente_numero) REFERENCES cliente (numero)
);

CREATE TABLE IF NOT EXISTS tipo_transacao (
	id SMALLSERIAL PRIMARY KEY,
	nome VARCHAR(50) NOT NULL,
	ativo BOOLEAN NOT NULL DEFAULT TRUE, --boa prática , CAMPO DE CONTROLE
	data_criacao TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP --boa prática , CAMPO DE CONTROLE
);

CREATE TABLE IF NOT EXISTS cliente_transacoes (
	id BIGSERIAL PRIMARY KEY,
	banco_numero INTEGER NOT NULL,
	agencia_numero INTEGER NOT NULL,
	conta_corrente_numero  BIGINT NOT NULL,
	conta_corrente_digito SMALLINT NOT NULL,
	cliente_numero BIGINT NOT NULL,
	tipo_transacao_id SMALLINT NOT NULL,
	valor NUMERIC(15,2) NOT NULL,
	data_criacao TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, --boa prática , CAMPO DE CONTROLE
	FOREIGN KEY (banco_numero, agencia_numero, conta_corrente_numero, conta_corrente_digito, cliente_numero) REFERENCES conta_corrente (banco_numero, agencia_numero, numero, digito, cliente_numero)
);

-- Exercícios extras

INSERT INTO cliente
VALUES (
	1,
	'Wiliam Nascimento da Silva',
	'meuemail@gmail.com'
)
ON CONFLICT (numero) DO NOTHING;

SELECT numero, nome, email, ativo, data_criacao
FROM cliente;

INSERT INTO cliente
VALUES (
	2,
	'Jorge Jesus',
	'jjmister@uol.com'
)
ON CONFLICT (numero) DO NOTHING;

SELECT *
FROM cliente;

INSERT INTO cliente (
	nome,
	email,
	ativo
)
VALUES (
	'karol Konká',
	'karolbbb21@globo.com',
	false
)
ON CONFLICT (numero) DO NOTHING;

SELECT *
FROM cliente
WHERE numero = 3;

DELETE FROM cliente
WHERE numero = 3;

SELECT *
FROM cliente;