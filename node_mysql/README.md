Sequencia para criar o projeto 
criar o arquivo package
### npm init

### npm install express

Rodar o projeto 
### node app.js

Acessar o projeto no navegador
### http://localhost:8081

Instalar o  modulo para reinicar o servidor sempre que houver   alteração no código fonte, g significa globalmente
### npm install -g nodemon

Instalar i banco de dados MySQL

Verificar o banco de dados MySQL no pront de comando
### mysql -h localhost  -u root -p

Instalar o workbench para gerenciar o banco de dados de forma grafica

Comando básicos de MySQL
Criar de base dados
### Create database celke character set utf8mb4 collate uf8mb4_unicode_ci;

Criar a tabela

### Create table `users`(
### `id` int NOT NULL AUTO_INCREMENT,
### `name` varchar(220) collate utf8mb4_unicode_ci  DEFAULT NULL,
### `email` varchar(220) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
### PRIMARY KEY(`id`)
### ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

Selecionar registo no banco de dados
### SELECT id, name,email FROM users;

Cadastrar registro no banco de dados 
### INSERT INTO	 users (name, email) VALUES ('Danillo', 'Willian@gmail.com');

Limitar quantidade de registros selecionado no banco de dados 
### SELECT id, name,email FROM users LIMIT 3;

Limitar quantidade de registros selecionado no banco de dados e iniciar o inicio
### SELECT id, name,email FROM users LIMIT 2 OFFSET 4;
pg 1 = 1,2
pg 2 = 2,4
pg 3 = 5,6

Acrescentar condição na busca de registros
### SELECT id, name,email FROM users WHERE email = 'willian@gmail.com' LIMIT 1;

Acrescentar mais de uma condição na busca de registros
### SELECT id, name,email FROM users WHERE email = 'willian@gmail.com'AND name 'Danilo' LIMIT 1;
### SELECT id, name,email FROM users WHERE email = 'willian@gmail.com'OR name 'Danilo' LIMIT 1;

Ordenar os registros retornado do banco de dados (ASC do mais antigo pro mais recente)
### SELECT id, name,email FROM users ORDER BY id ASC;

Ordenar os registros retornado do banco de dados (DESC o mais recente pro mais antigo)
### SELECT id, name,email FROM users ORDER BY id DESC;

Editar registro no banco de dados
### UPDATE users SET name = 'Danilo Willian Gomes' ,email='Williangyn23@gmail.com' WHERE id = 1;

Apagar registro no banco de dados
### DELETE FROM users WHERE id=7;

Sequeliza é uma biblioteca Javascript que facilita o gerenciamento de um banco de dados SQL
### npm install --save sequelize

Instalar o drive do banco de dados 
### npm install --save mysql2