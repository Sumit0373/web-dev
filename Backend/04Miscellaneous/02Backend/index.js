const express = require("express");  
const app = express();
 let port = 3000;
 app.use(express.urlencoded({extended : true}));
 app.listen(port,()=>{
    console.log(`Server Started at the port ${port}`);
 });

 //here we can holding the get request
app.get("/register", (req, res)=>{
 let {userId, password} = req.query; // this variabe match with the form input name variabe other show undefine
 console.log(userId +" "+password); 
 res.send(`We can get your's get request  dear @${userId}`);
});

//Here in post request data not come in query string data come inside the regirser body 
app.post("/register", (req,res)=>{
  /*
  req.body contain all the data coming as post request .. 
  but when you console.log(req.body) this it show undefine because express 
  not user the data coming in the register body 

  so we parse the data. 
  to make express uderstand this url encoded data we have to write this line above .... 
  
  app.use(express.urlencoded({extended: true})); this is use for url encoded data
  app.use(express.json()); this is use for json data .
  req.body always show undefine if you not write this ...
  */
  let {user , password} = req.body
  res.send(`We can get your's post request @${user}`);
});