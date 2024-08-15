create database crud;
use crud;
create table Items(id int auto_increment primary key,name varchar(100)not null,description varchar(100) not null,price int not null,category varchar(100) not null
,quantity int not null,brand varchar(100) not null,weight int not null,color varchar(100) not null);
drop table Items;
select * from Items;