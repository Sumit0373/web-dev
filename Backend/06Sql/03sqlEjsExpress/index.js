const express = require("express"); // taking express
const app = express();
let port = 3000;

app.listen(port , ()=>{
    console.log(`port is listining at ${port}`);
})

const path = require("path"); // getting the path of current directory

// app.use middlewhere and app.set changing the setting
app.use(express.urlencoded({extended:true})); //parsing json data
app.set("view engine" , "ejs"); //set view file
app.set("views" ,path.join(__dirname,"view") ); // set view path
app.use(express.static(path.join(__dirname,"public"))); // set public path 


//database and connection;
const mysql = require("mysql2");
const connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    database: "record",
    password : "root",
});


const { v4: uuidv4 } = require('uuid'); // this is use to generate a unique ID for transaction

var methodOverride = require('method-override'); // this method override is use to change the form get and post request into patch and delete requect 
app.use(methodOverride('_method')); // this is a method override middleware

//home  route  
app.get("/",(req, res)=>{
  let q ="select * FROM student";
try{
  // this is use to show the data on home page 
  connection.query(q,(err,result)=>{
    if(err) throw err;
    let studentData = result;

  res.render("home.ejs",{studentData});
  })
}catch(err){
    console.log("Getting an error");
    res.send("Erro in the Database");
}
})


//after clicking join button from home ejs
app.get("/add",(req, res)=>{
  res.render("join.ejs");
})

app.post("/add",(req, res)=>{
   let {name ,content , password} = req.body;
    let id = uuidv4();
    let data = [id,name , content , password];

 let q = "INSERT INTO student(id , name , content , password) VALUES(?,?,?,?)";
 try{
   connection.query(q,data,(err, resutl)=>{
    if(err) throw err;
    res.redirect("/");
   })

 }catch(err){
  console.log("error in adding the data");
  res.send("Erro in add into data base");
 }
})

//editing the form
app.get("/:id/edit",(req ,res)=>{
 let ID = req.params.id;
 let q = "SELECT * FROM student WHERE id=?";
 connection.query(q,[ID],(err, result)=>{
 if(err) res.send("Getting erro in data base");
  let data = result[0];
  res.render("edit.ejs",{data});
 })
})

// after submiting the edit form than get or post come we can change this into patch by using the post
app.patch("/:id/edit",async (req, res)=>{
 let ID = req.params.id;
 let{name , content , password} = req.body;

  let q = "SELECT * FROM student WHERE id=?";
 connection.query(q,[ID],(err, result)=>{
 if(err) return res.send("Getting erro in data base");
  let data =  result[0];
  let p1 = data.password;
  
  //verifying the older data..
  if(p1 !=password){
   return res.send("Wrong Password");

  }

// update database
 let updateQuery = "UPDATE student SET name=? , content=? where id=?";
 connection.query(updateQuery,[name , content , ID],(err, resutl)=>{
  if(err) console.log("getting erro to update in database");
  console.log(result);
  res.redirect("/");
 })
 })
});

// deleteing Request..
app.delete("/:id",(req, res)=>{
  let ID  = req.params.id;
  let deletequerry = "DELETE FROM student WHERE  id =?";
  connection.query(deletequerry,[ID] , (err, result)=>{
    if(err) return res.sendStatus(500);
    res.sendStatus(200) ;
  })
})