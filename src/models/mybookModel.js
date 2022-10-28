const mongoose=require('mongoose')
const NewBookSchema=new mongoose.Schema({
    bookName:String,
    author_id:{
        type:mongoose.Schema.ObjectId,
        required:true
    },
    price:Number,
    ratings:Number,

},{timestamps:true})
module.exports=mongoose.model('Newbook',NewBookSchema)