const mongoose=require("mongoose");
const schema=mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    purpose:{
        type:String
    },
    address:{
        type:String
    }
})
module.exports=mongoose.model("task",schema);