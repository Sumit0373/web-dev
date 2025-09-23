//requiring a module...
const { faker } = require('@faker-js/faker');

//requiring  a sql2
const mysql = require('mysql2');

// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost', // here localhost 
    user: 'root', // root
    database: 'delta_app', // database name
    password: "mysql" // password of my sql
  });
  
// we use a query method to intract with the data variable 
try{
    connection.query("SHOW TABLES" ,(err, res)=>{
        if(err) throw err;
      console.log(res);
    });    
}
catch{
    console.log(err);
}

//when you run this index file it can give an error  code: '(ER_PARSE_ERROR',)

  /*
  Using SQL from CLI (to use my sql form command line (CLI)) we write this command acess the database form command line 
  /usr/local/mysql/bin/mysql -u root -p   
Create schema.sql
source schema.sql II in CLI
  */
// if you start connetion connection.query it will run to stop we have to write  connection.end();
connection.end();  

let getRandomUser = ()=> {
    return {
      Id: faker.string.uuid(),
      username: faker.internet.username(), // before version 9.1.0, use userName()
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
  }
  