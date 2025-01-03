const express = require("express");
const app = express();
const path = require("path"); // here we require paht to set the path of views folder 
let port = 3000;
app.listen(port,()=>{
    console.log(`Server started at prot ${port}`);
});


/* 
app.set is a function which set the view engin to ejs;

here we  require express but not ejs because ejs contained by express already no need to require ejs

view means => the templates file or engin we send to browser

*/
//to use ejs we have to do this
app.set("view engine" , "ejs");


//here set the path so that we can access the views folder outside the 01EJSdir
// we set views to this path . In this we join the (__dirname) contain (index.js) path and add to(views)
app.set("views" , path.join(__dirname,"/views"));


/*

by the help of ejs we render the file (we send the ejs file to the browser)

to create a templates we have to create a views folder inside views folder we can
create a multiple file of ejs . these flie which contained html or js code 

and express always search view folder if you render ejs file 

and this views folder present in the same directory where index.js present

*/
app.get("/",(req, res)=>{
    //you have to create a views folder and inside views home.ejs
res.render("home.ejs");
});

/*
when you go 03EJSdir 
and run this nodemon 01EJSdir/index.js

and from localhost:3000/home => output : Home
          localhost:3000 => give error because express search for views folder inside the Backend
                            it will give error .. 


        if you can avoid by adding the views folder path and run the
         server outside it can not give error
*/
app.get("/home",(req,res)=>{
    res.send("Home");
});