import mongoose from "mongoose";
const userschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number
    },
    password:{
        type:String,
        required:true
    },
    hobbies:[{
        type:String,
        enum:["music","cricket","coding"]
    }]
});


const User=mongoose.model("User",userschema);
export default User;

