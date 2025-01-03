const express = require("express");
const app = express();
let port =3000;
app.listen(port , ()=>{
    console.log(`server start at ${port}`);
});

app.get("/",(req , res)=>{
    res.render("home.ejs");
});

app.get("/ig/:username" , (req,res)=>{
    //after curly bracket it will decosturct the object and find the value
    let {username }= req.params; // this username contain only two routes , 1: cates 2: dogs
    
    // require all the data coming form the database(here form json file) in instaData Pass to the server
let instaData = require("./data.json");

 // if you search http://localhost:3000/ig/apnacollege this will give you an error no data
    // exist in json file so you will use if else to check valid data and than responce

    // this will print the particular data we are looking for
 console.log(instaData[username]); // if data is not valid it show undefine


 if(instaData[username]){
    //here inside object another object that why we pass that object..
res.render("instagram.ejs", {username,data : instaData[username]});
 }
else{
    res.render("error.ejs");
}
})

/*
Includes are use in the ejs file which is use to add sub tamplet inside the ejs file

inside the views folder you have to create the another folder called the 
includes and inside the includes folder you create a ejs file and inside the ejs file 
you can write your code . so that you can use this includes folder in any ejs file present 
in the views folder.

to use this include folder you have to include this include folder inside the ejs present in views

<%- %> this tag use to send the html code read more form ejs website

<%- include(includes/footer.ejs);

Now we will learn how to add footer using include in all the ejs file preseint in views 

and also see the home page 
*/