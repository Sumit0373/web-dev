const express = require("express");
//const { userInfo } = require("os");
const app = express();
let port = 3000;

//require a path it is a built-in method js
let path = require("path");

//this can use to convert the get,post request into patch,put,delete..
let methodOverride = require("method-override");

//here we parse the data so express can understand the encoded data ... 
app.use(express.urlencoded({extended : true}));

//this use to override the request comming form the clint
app.use(methodOverride('_method'));

//set view engine 
app.set("view engine" , "ejs");

//setting a path for view..(we mainly set the path so that every operating system can uderstand ..
// weathe it is windows , mac , linux).. this view folder use to attach css file
app.set("views", path.join(__dirname, "views"));

//setting a path for public
app.use(express.static(path.join(__dirname , "public")));


app.listen(port,()=>{
    console.log(`server is listening at ${port}`);
});

/*
Creating a Id for Post

UUID Package  in express

use to give unique identifier 
install => npm install uuid 
go express and read more about uuid

*/

//this way we can require a uuid post

const { v4: uuidv4 } = require('uuid');


// creating a post 
let posts =[
 {
   id : uuidv4(), // this funciton give an random id
    username : "sumit",
    content : "Engineer are the creater"
 },
 {  id:  uuidv4(),
    username : "Ashutosh",
    content : "Advocate are the protector"
 },
 {  
   id : uuidv4(),
    username : "Divyansh",
    content  : "Doctor are the life saver"
 }
];


/*
Implement : Get/posts
Get   /posts    to get all the data for all posts

this can show all the post 
*/
app.get("/posts" , (req, res)=>{
    res.render("home.ejs", {posts});
});


/*
 Implement : POST/posts
 create Route

 2 routes

 * Serve the form               Get              /posts/new
 * Add  the  new post           post             /posts
 
so we have to create a form which take a input form the user ..

to create a form we send the get request at routs /posts/new which return a form page
and user write a detail submit and this form and this form  send posts request 
(action ="posts/") to add data in the page

*/
app.get("/posts/new" , (req,res)=>{
 res.render("new.ejs");
});

// when we submit the form it will send the post request to add the data in form


//ADDING A NEW DATA ... 
// app.post("/posts" , (req, res)=>{
//   let {username , content} = req.body;
//   posts.push({username , content});
//   res.send("Data successfully added");
// }); // I Comment to add redirect in the below function ...




// in the above section we see that we can go to  posts/new route to get form and when we submit
// the form it can take us to another route and than we go to all post route and refersh the page
// so we have to manage two routes to add post . Now express provide functionality to add new data 
// on the same page 



/*
Redirect


Now we use redirect to add to connect all the pages 
we see above to we use two different tab to add data now we use the rediret to connect
all the page togeather

example:
 req.send() => use to send text , html , object
 req.render() => to render ejs file 
 req.redirect(URL) to pass the url 
*/

//this is use for creating a new post
app.post("/posts" , (req, res)=>{
   let {username , content} = req.body;
   let id =  uuidv4();
   posts.push({id ,username , content});
  res.redirect("/posts"); // this will call the get for all post (localhost:3000/posts/) ..
  // for adding new post go to home.ejs and add anchor tag to create a new post..
 });
 

 /*
 Implement : get/posts/:id

 show route

 GET  /posts/:id      to get one post (using id);

 */

// here we show each post in detail with the help of id we find all detail from array
 app.get("/posts/:id",(req, res)=>{
   let {id} = req.params; // this id come form the home.ejs button (see the post).
   let detailpost = posts.find((p) => id === p.id );
    res.render("show.ejs", {detailpost});
 });



 /*
 Implement : PATCH/posts/:id

Update Route

PATCH      /posts/:id      to update specific post

patch is use to update some data ..

 */

app.patch("/posts/:id",(req,res)=>{
  let newContent = req.body.content;
  let {id} = req.params;
  console.log(newContent);
  console.log(id);
  let detailpost = posts.find((p) => id === p.id );
  detailpost.content = newContent;
 res.redirect("/posts");
}); 


/*
Ceate a form to update the content
Edit route

Serve the edit form              Get             /posts/:id/edit
*/

/*
We can only send the get and post request form the html form (client only send the post or get request)
so we use a package form npm name method-override which can change the get and post rerquest into 
patch or put or delete ....

to install we write 
npm install method-override 

we can use override using a query value method 

so npm website to get more infomation 

npm install method-override

var express = require('express')
var methodOverride = require('method-override')
var app = express()
override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

*/

//upcoming post request converted into patch request... 
app.get("/posts/:id/edit",(req,res)=>{
   let {id} = req.params;
   let post = posts.find((p)=> p.id === id);
 res.render("editPost.ejs",{post});

});




/*
Implement : /posts/:id
Destory route
to delete the specific route

*/
// this handle the delete request 
app.delete("/posts/:id",(req,res)=>{
   let {id} = req.params;
   posts = posts.filter((p)=> id !== p.id); // this filter out all data in original array where id not equal
res.redirect("/posts");
})