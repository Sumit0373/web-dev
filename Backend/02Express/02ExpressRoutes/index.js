/*                      Hear we learn about  routing 
                        
 routes  => when you search google.com/account , amazon.com/help , alphaBatch/day31
          all this thing after / (slash) is a routes 


 it is process of selecting a path for traffic in a network or between
  or across multiple networks.

  code :
     
  app.get("/apple",(req,res) => {
      res.send({
      fruit : "apple",
      color : "red"
      });
    });

    you can only send one responce for one request here we one respone for different path
*/

 const express = require("express");
 const app = express();
 let port = 3000;

 //app.use is used to send the same responce to all routes
 app.listen(port,()=>{
    console.log(`app is listning on port ${port}`);
 });

//sending the request for different routes we use get method
//  here to send responce for different method

app.get("/" , (req,res)=>{
   res.send("this is root path of the file");
});
 app.get("/apple",(req,res)=>{
    res.send("This is a apple request");
 });

 app.get("/orange",(req,res)=>{
    res.send("This is a ornage request");
 });

 //"start use to handle wrong path that not exist"
 app.get("*" , (req,res)=>{
    res.send("this path does not exist");
 });


 //This is a post request
 app.post("/" ,(req,res)=>{
    res.send("you send a post request to root");
 });














 // now we install nodemon for npm afer nodemon you don't need to start the server again again....

 // we install nodemon globally so you dontneed to start it again and again ...