const mongoose = require("mongoose");
const express = require("express");
const router = require("../route/userroute");

const app= express();
app.use(express.json());
app.use("/user",router);

mongodb+srv://UserName:abcd1234@cluster0.3sqlnlq.mongodb.net/?appName=Cluster0
.then((res)=>{
  console.log("connected");
  
})
.catch((error)=>{
console.log(error);

})

app.listen(9000,()=>{
    console.log(`http://localhost:${9000}`);
    
})
