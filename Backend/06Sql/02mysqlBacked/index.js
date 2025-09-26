//requiring a module...
const { faker } = require('@faker-js/faker');



let getRandomUser = (i) => {
  return [
        i,         // id
    faker.person.fullName(),               // name
    faker.number.int({ min: 18, max: 60 }) // age
  ];
};

// //requiring  a sql2
const mysql = require('mysql2');

// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost', // here localhost 
    user: 'root', // root
    database: 'temp', // database name
    password: "root" // password of my sql
  });






  
// we use a query method to intract with the data variable 
// try{
//     connection.query("SHOW TABLES" ,(err, res)=>{
//         if(err) throw err;
//       console.log(res);
//     });    
// }
// catch{
//     console.log(err);
// }

//when you run this index file it can give an error  code: '(ER_PARSE_ERROR',)

  /*
  Using SQL from CLI (to use my sql form command line (CLI)) we write this command acess the database form command line 
  /usr/local/mysql/bin/mysql -u root -p   
Create schema.sql
source schema.sql II in CLI
  */
// if you start connetion connection.query it will run to stop we have to write  connection.end();







//Inserting the data in a table...


// let q = "INSERT INTO tempTable (id , name , age) VALUES (?,?,?) ";
// let user = [1402 , "Dig" , 24];
// try {
//   connection.query(q,user,(err ,result)=>{
//   if(err) throw err;
//    console.log(result);
// })
// } catch(err){
//   console.log(err);
// }






//iNSERTING LARGE DATA FOR THAT YOU NEED TO UNCOMMENT THE FAKER ON TOP
//this query can run only onces because it contain the id which is a primary key you can change the id than it will run ...

// let data =[];
// for(let i=201; i<=300 ; i++){
//   data.push(getRandomUser(i));
// }
// console.log(data)
//  let q = "INSERT INTO tempTable (id, name, age) VALUES ?";
 
//   connection.query(q,[data]);
//  connection.end();  


//SHOW DATA
let q = "SELECT * FROM tempTable";
connection.query(q,(err,result)=>{
  if(err) console.log(err);
  console.log(result);
});
