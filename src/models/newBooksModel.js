const mongoose=require('mongoose')
const newBookSchema= new mongoose.Schema({
    BookName:String,
    author_id:Number,
    price:String,
    ratings:Number
},{timestamps:true})

module.exports=mongoose.model("NewBook",newBookSchema)
