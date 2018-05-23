create database kaos;
use kaos;
create table login(idUser int auto_increment, user varchar(50) not null, password varchar(100) not null, permission varchar(50) not null, PRIMARY KEY (idUser));