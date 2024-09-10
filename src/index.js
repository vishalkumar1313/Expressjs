const express=require("express");
const path=require("path");
const app=express();
const port=4000;

console.log(path.join(__dirname,"../public/"));
// const staticPath=path.join(__dirname,"../public");
// app.use(express.static(staticPath));

app.get("/",(req,res)=>{
    res.send("<h1>Hello from the other side Vishal </h1>");
});

app.listen(port,()=>{
    console.log(`Listening the port at ${port}`);
});

