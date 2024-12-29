/*                     Path Parameters

     **  when you open google and type  **

       instagram.com/sumit_0373
       instagram.com/divyash_898
       
       there are so many path in it not possible to write all path so we use some technique
       so in one path we set variable value which is change continiously according to request

*/

const express =  require("express");
const  app = express();

let port =3000;

app.listen(port , ()=>{
    console.log(`server start at port ${port}`);
});

//here get request is use to send the server here we create a variable which is use to send the
// multiple request to the server 

app.get("/" , (req,res) => {
  res.send("This is a root");
});

// if you want to send the multiple request you can use a varibale 
// if you write (/:username) this username become a variable
//  and all the data store in req variable you can see req.params ..

// this username is variable and it information store in req .
//  and (req.params) show the parameter of the request  





//this username and id is variable come form routes
app.get("/:username/:id" , (req, res) =>{
 
    // here console.log use to print the parameter of request
    console.log(req.params);
 
    // here we send the responce to browser username and id
     let {username , id } = req.params;
    res.send(`your username is ${username} and id ${id}`);
   //open google and send multiple request like this localhost:3000/sumit_0373/myid
});






/*                               query string
 
if you search apple in google
when ever you search any thing in google so in link you find the( /search?q=apple) so this q is 
know as a query string 

if you search weather you find this => https://www.google.com/search?q=weather
if you search cricket score you find this => https://www.google.com/search?q=cricket+score
      
so this q is query string..


so in url if you request with some query string so here we learn how to handle this q string...
*/


app.get("/search" , (req ,res) =>{
  // this can print all query on the console window
  console.log(req.query);

   //storing this query variable
   let  {q}  = req.query;
  
  if(!q) {
    res.send("<h1>Nothing Search</h1");
  }
  res.send(`this is your search result => ${q}`);

  // how to send request form browser localhost:3000/search?q=apple
})