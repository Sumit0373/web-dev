const express = require("express");
const app = express();
let port =3000;
app.listen(port,()=>{
    console.log(`Server is started at the port ${port}`);
});

app.set("view engine", "ejs");

app.get("/",(req,res)=>{
    res.send("I am a home");
});

/*
Now we will learn how to pass the data to ejs 

any data come form database we learn how to hold the data in variable..

we pass the data in the form of key : value  inside the object 
*/

app.get("/rolldice", (req, res)=>{
  //suppose this random variable come form the database....
  let data = Math.floor(Math.random()*6)+1;
  // dataVar pass to the ejs folder 
  // both key and value have same so if we pass {dataVar} is also correct. 
  res.render("home.ejs" , {dataVar:data});
  // we can also pall like this res.render("home.ejs" , {dataVar});
})




/*
Now we will learn how to create a instagram pages 

Instagram EJS

Create a basic template for instagram page based on following route :

/ig/:username

*/
app.get("/ig/:username", (req, res) => {
    // if you use curly bracket if can take out the value of the object
    let {username} = req.params;
    console.log(username);
   // passing this value username to ejs
   res.render("Instagram.ejs",{username});  
  });




  /*
 Conditional Statements in Ejs
 we can add condition inside EJS
 SEE homeAgain.ejs file and see the result...
  */
 app.get("/rolldiceAgain", (req, res)=>{
    let data = Math.floor(Math.random()*6)+1;
    //we can also pass the list of follwer for implemantaion of loop
   let followers = ["Abhiyana","Shruti" , "Tripti" ,"Adhya"];
    res.render("homeAgain.ejs" , {data,followers});
    // we can also pall like this res.render("home.ejs" , {data});
  });