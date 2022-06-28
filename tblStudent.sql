create database tblStudents
Create table tblStudents
(
    Id int primary key identity,
    Name nvarchar(50),
    Gender nvarchar(10),
    City nvarchar(20)
)
Go

Insert into tblStudents values ('Mark', 'Male', 'London')
Insert into tblStudents values ('John', 'Male', 'Chennai')

 
Insert into tblStudents values ('Sara', 'Female', 'Sydney')

 
Insert into tblStudents values ('Tom', 'Male', 'New York')
Insert into tblStudents values ('Pam', 'Male', 'Los Angeles')
Insert into tblStudents values ('Catherine', 'Female', 'Chicago')
Insert into tblStudents values ('Mary', 'Female', 'Houston')
Insert into tblStudents values ('Mike', 'Male', 'Phoenix')
Insert into tblStudents values ('Rosie', 'Female', 'Manchester')
Insert into tblStudents values ('Sasha', 'Female', 'Hyderabad')
Go

select * from tblStudents