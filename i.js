const express =require("express");
const app=express();
const task=require("./model")
const mongoose=require("mongoose")
app.use(express.json())
var cors = require('cors')

app.use(cors())
require("dotenv").config();
//..........mongodb connection...........
mongoose.connect("mongodb+srv://all:all@cluster0.sgf5un5.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    
}).then(
    ()=>{
        console.log("mongooo connected")
    }
)
app.get("/",(req,res)=>{
    res.send("photography")
})
app.post("/adding",async(req,res)=>{
    console.log(req.body)
    const {name,email,purpose,address}=req.body;

    let newUser= new task(req.body)
    console.log(newUser,"newuser")
     await newUser.save();
     return res.send("Thankyou for choosing us.We will contact you")
})
app.listen(process.env.PORT || 8000,()=>{
    console.log("port is running")
})