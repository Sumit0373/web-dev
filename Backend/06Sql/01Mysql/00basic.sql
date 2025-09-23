-- this is use to create a database
CREATE DATABASE college;            

-- this is use to select the database to which database you use to perform task
USE college;

-- this is use to create a table in database
CREATE TABLE student (
roll INT PRIMARY KEY ,
name VARCHAR(50),
age INT check (age >=10),
mark INT 
);

-- foreign key concept 
CREATE TABLE course(
course_name VARCHAR(30),
course_id INT ,
student_roll INT,
totalSubject INT ,
FOREIGN KEY (student_roll) REFERENCES student(roll)
);

-- THIS COMMAND IS USE TO INSERT DATA INTO TABLE
INSERT INTO  student (roll,name,age,mark) VALUES
(1,"sumit",20 ,100),
(2,"ashutosh",20 , 98),
(3,"Divyash",17 ,21),
(4,"Abhishek",22 ,88),
(5,"Digvijay",18 ,90);

INSERT INTO course( course_name , course_id, student_roll,totalSubject) VALUES
("Engineering",13,1 ,58),
("Law",06,2,45),
("Medical",07,03,56),
("Engineering",13,4,58),
("civil" , 08,5,66);
-- This is use to show the table 
SELECT * FROM student;
SELECT * From course;
-- This is use to show only required column
SELECT roll , name  FROM student;

-- This is use to show only distant value form the table expample if sumit come 2 time in name it show only one 
SELECT DISTINCT name from student;

-- WHERE CLAUE  USE TO CONDITION .
SELECT DISTINCT course_name FROM course WHERE totalSubject>50;
-- AND operator
Select name , mark , age From student WHere mark<50 AND age <20;
-- between operator (SELECT FORM GIVEN RANGE).
Select * FROM  student Where roll BETWEEN 1 AND 3;
-- IN orperator match any value in the list
SELECT * FROM student WHERE age IN (20,21,17);

-- ORDER BY IS USE TO ORDERED THE ELEMENT IN ASC OR DESC
SELECT name ,age FROM student ORDER BY age ASC;
SELECT name ,mark From student ORDER BY mark ASC;


-- Aggregate function sum , max , min , avg , count;
SELECT  max(mark) From student;
SELECT count(name) From student WHERE age = 20; -- ashutosh , sumit 

-- Group by HERE it can group the data by according age to age . 
SELECT  age FROM student Group by age;

-- here with aggregrate function we can max mark in each group age 
SELECT age , max(mark) From student group by age ; -- in age 20 sumit has 100 mark 

-- IF WE write Seclect name From studet group by age it will give an error we can not group by name 


-- having is apply on group data by
SELECT age , max(mark) From student group by age having max(mark)>80; 

-- THIS ORDER ALL EXCUTION GOING ON 
SELECT age , max(mark) From student group by age having max(mark)>80 ORDER BY age ASC; -- here output in asc



-- UPDATING THE DATA IN A ROW OF A TABLE 

-- we can not directly update the data base we have to off the safe mode
SET SQL_SAFE_UPDATES = 0; -- THIS CAN alow the modification in the data base 

UPDATE student 
SET mark =50 
WHeRE mark =21; -- here we are updating the mark of divyansh


-- DELETE IS USE TO DELETE THE ROW FORM THE TABLE 
DELETE FROM course 
WHERE student_roll=4; -- THIS CAN DELTE THE DATA OF ABHISHEK course engineereing

SELECT *  From course;


-- Alter is use to change the schema
-- ADD COLUMEN

ALTER TABLE student 
ADD COLUMN city VARCHAR(50) DEFAULT "DELHI";

SELECT * FROM student; 


-- DELETE TABLE 
ALTER TABLE student
drop COLUMN city;
