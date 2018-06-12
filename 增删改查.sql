use mydb1802


--给学生表添加一条数据

insert into stuinfo(stuid,stuname,stusex,stuage) values('xa180201','和湍湍','女',18)
insert into stuinfo(stuid,stuname,stusex,stuage) values('xa180202','黄乐乐','男',20)
insert into stuinfo(stuid,stuname,stusex,stuage) values('xa180203','李清源','男',19)
insert into stuinfo(stuid,stuname,stusex,stuage) values('xa180204','杜懿萱','女',25)


--查询表的数据
--select * from stuinfo where stusex='男' and stuage>19
select * from stuinfo

--删除数据
delete from stuinfo where stusex='女'

--修改
update stuinfo set stusex='男' where stuname='和湍湍'