const mongoose = require('mongoose');
const newUserSchema = new mongoose.Schema( {
   Name: String,
   address:String,
	age: Number,
   balance:{
    type:Number,
    default:100
   },
    gender: {
        type: String,
        enum: ["male", "female", "others"]
    },
    isFreeAppUser: {
        type:Boolean,
        default:false
     },
     
}, { timestamps: true });

module.exports = mongoose.model('NewUser', newUserSchema) 
 
