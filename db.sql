-- create database aula;

use aula;

create table pessoa	(
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(90) NOT NULL,
email VARCHAR(30) NOT NULL,
telefone VARCHAR(30) NOT NULL,
id_endereco INT(6)
);

create table endereco	(
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
rua VARCHAR(30) NOT NULL,
cep VARCHAR(30) NOT NULL,
numero VARCHAR(30) NOT NULL,
cidade VARCHAR(30) NOT NULL,
estado VARCHAR(30) NOT NULL
);

create table cliente	(
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
cpf VARCHAR(90) NOT NULL,
id_pessoa INT(6)
);

create table fornecedor	(
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
cnpj VARCHAR(90) NOT NULL,
id_pessoa INT(6)
);

select * from endereco;

select * from pessoa;

select * from fornecedor;

select * from cliente;