const express = require("express");
const app = express();
let path = require("path");
var methodOverride = require('method-override');
let port = 3000;
app.listen(port,()=>{
    console.log(`Server started at ${port}`);
});

const { v4: uuidv4 } = require('uuid');
app.use(methodOverride('_method'));
app.set("view engine","ejs");
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname , "public")));
let twittes= [
    {
        id : uuidv4(),
        username : "Sumit",
        post: "Learning Backend in web devlopement"
    },
    {
        id : uuidv4(),
        username : "Ashutosh",
        post: "Fighting for justice"
    },
    {
        id : uuidv4(),
        username : "Divyansh",
        post: "Preparing for Neet"
    }
]
app.get("/twitter",(req, res)=>{
res.render("home.ejs",{twittes});
});

app.get("/twittes/add",(req, res)=>{
res.render("addtwitte.ejs");
});
app.post("/twittes",(req,res)=>{
 let{username,post} = req.body;
 let id = uuidv4();
 
 twittes.push({id,username,post});
 res.redirect("/twitter");
});

app.get("/twittes/:id/view",(req,res)=>{
    let {id} =req.params;
    let mytwitte = twittes.find((t)=> t.id === id);
    res.render("twitteView.ejs",{mytwitte});
})

app.get("/twittes/:id/edit",(req,res)=>{
    let {id} = req.params;
     let mytwitte = twittes.find((t)=> id===t.id);
  res.render("twittesEdit.ejs",{mytwitte});
});
app.patch("/twittes/:id",(req,res)=>{
        let {id}= req.params;
        let {content} = req.body; 
        let mytwitte= twittes.find((t)=> id === t.id);
        mytwitte.post = content;
        res.redirect("/twitter");
});
app.delete("/twittes/:id",(req,res)=>{
 let {id} = req.params;
  twittes = twittes.filter((t)=> t.id !== id);
  res.redirect("/twitter");
});