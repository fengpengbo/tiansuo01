--创建数据库
create database mydb1802

--创建表
create table stuinfo(
   stuid char(8) primary key, 
   stuname varchar(30) not null,
   stusex char(2),
   stuage int
)