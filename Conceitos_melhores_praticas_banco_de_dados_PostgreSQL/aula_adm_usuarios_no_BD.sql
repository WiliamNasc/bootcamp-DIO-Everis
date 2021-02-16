-- Roles = pápeis ou funções, Users = usuários, e Groups = contas, ou seja perfis de atuação em um banco de dados, que possuem permissões em comum ou específicas;
-- É possível que roles, pertençam a outras roles;
-- Quando falamos de Roles, Users e Groups, estamos nos referindo ao mesmo conceito;
-- Users, e Groups, são apelidos, para diferenciarmos roles, com comportamentos distintos;

CREATE ROLE PROFESSORES NOCREATEDB NOCREATEROLE INHERIT NOLOGIN NOBYPASSRLS CONNECTION
LIMIT 10; --Cria um grupo de professores, com uma série de restrições;

ALTER ROLE PROFESSORES PASSWORD '123'; --Permite a alteração no grupo de professores;
--CREATE ROLE daniel LOGIN PASSWORD '123'; --Cria o grupo daniel, onde o mesmo será acessado por meio de login, e com a senha determinada;
--DROP ROLE daniel; --Apaga o grupo daniel;
--CREATE ROLE daniel LOGIN PASSWORD '123' IN ROLE professores; --O grupo daniel, faz parte, do grupo professores;

CREATE ROLE DANIEL LOGIN PASSWORD '123' ROLE PROFESSORES; --O grupo professores, faz parte, do grupo daniel;


CREATE TABLE TESTE (NOME varchar); --Criando uma tabela, com apenas um campo;

GRANT ALL ON TABLE TESTE TO PROFESSORES; --Dando todos os previlégios (disponíveis em um TABLE) da tabela teste, para a role professores;

CREATE ROLE DANIEL LOGIN PASSWORD '123';


CREATE ROLE DANIEL INHERIT LOGIN PASSWORD '123' IN ROLE PROFESSORES; --Cria a role daniel herdando as configurações de professores, e o inclui dentro do grupo de professores;

REVOKE PROFESSORES
FROM DANIEL; --Retira as permissões da role daniel, da role de professores;