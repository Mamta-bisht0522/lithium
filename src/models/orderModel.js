const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema( {
    amount: Number,
	isFreeAppUser: Boolean, 
	date: Date,
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:"User"
    },
	productId:{
        type:mongoose.Schema.ObjectId,
         ref:"Product"
    }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema) 
