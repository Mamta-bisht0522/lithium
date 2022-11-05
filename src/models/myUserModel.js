const mongoose=require("mongoose")
const myUserSchema=new mongoose.Schema({
    firstName :String,
    lastName : String,
    mobile : String,
    emailId : String,
    password : {
        type:String,
        required:true
    },
    gender : {
        type:String,
        enum:["male", "female", "other"]
    },
	isDeleted:{
        type:Boolean,
        default:false
    }, 
    age :Number

},{timestamps:true})


module.exports=mongoose.model("Myuser", myUserSchema)
    

