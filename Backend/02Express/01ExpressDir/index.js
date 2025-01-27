//use for server side programming

 /*
 In above folder we require most file like this require(./fileName) but here express we directly
 use require("express") not like this require("./express") because when we install package from 
 npm website , express is a package installed with npm, and all npm-installed packages
  are automatically placed in a folder called node_modules don't need to specify the path of .
 */
const express = require("express");

//after require this express use to function call and the data come will be store in app;
const app = express();

// console.log(app); this app is object which has various thing like function,variable method and so on

//port is logical endpoint which is use to take incoming request 3000 is custom port
let port = 3000;


//*here listen make webserver which can lister for incoming api request
// listen take two argurment 1 port number , 2 work

app.listen(port , ()=>{
    console.log(`app is listning on port ${port}`);
});


//when you run index.js the server start and continiously listning the incoming request
//if you want to stop press ctrl+c

// if you want to send the request to this server so open any browser and type localhost:3000 
// before run localhost:3000 make sure you run the index.js file;

// google show (cannot get) means server running but not resopnding to your request.









// here we learn receiving a request....

// (app.use) is use to receive  any kind request weather it is get request ,post request and so on .



  // app.use((req,res)=>{
  //   console.log("Responce is received");  // uncomment and see the work
  // });


// so when we send request to localhost:3000 so app.use print (Responce is recived) on console window
// which means responce is received here and on google continiously loading  it not showing anything
// which means no responce coming form server to google..









// after receiving responce here we learn how to send the responce ..

/*                     Sending a responce 
                1: Request (req)
                2: Response(res)

        so when we send http request from google so request sent in text based 
        than express convert this text base request into object and this prosess 
        know as parcing 
        
         text based http request because server return in many different languare 
          like in python , javascript and so on ... all they understand this http request

  
          go to the npm website (express => documentation => apireference => resonse ) and learn
          more about it

          here we use res.sent("") to sent string or object and so many thing ... 
        */
           
          app.use((req,res)=>{
            //send string responce to browser
           res.send("This is a basic string");

            //sending object to browser this object converted into json form
            // res.send({
            //     fruit :"apple",
            //     color :"red"
            // }); 

            // sending html code
          /*   let code = "<h1>fruit</h1><ul><li>apple</li><li>orange</li></ul>";
             res.send(code); 
             */
            //uncomment one by one and see the result...
          });




          //we can only sent only one responce for one request.. 
          // if one request so we can only send one res.send()