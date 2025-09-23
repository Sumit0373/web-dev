CREATE DATABASE Employee;
use Employee;
CREATE TABLE employee_details (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  age INT,
  experience INT,
  email VARCHAR(100),
  salary INT,
  DA INT,
  HRA INT,
  PF INT,
  NPS INT,
  totalSalary INT
);
drop table employee_details;
select * from employee_details;