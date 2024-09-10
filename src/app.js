//Express is used in routing and api

const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send("<h1>Hello from the other side </h1>");
});
app.get("/about",(req,res)=>{
    res.send("<h1>Hello from the About </h1>");
});

app.listen(8000,()=>{
    console.log("Listening the port at 8000");
})


// API
// post - create
// get - Read
// put - update
// delete -delete