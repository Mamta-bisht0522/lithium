const mongoose = require('mongoose');

const book1Schema = new mongoose.Schema( {
    bookName: {
        type:String, 
        required:true
    },
    authorName: String, 
    tags: [String],
    year:{type: Number, default: 2021},
    isStockAvailable :Boolean ,
    isPublished: Boolean,
    totalPages :Number,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
   
}, { timestamps: true });


module.exports = mongoose.model('Book1', book1Schema)