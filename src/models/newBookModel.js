const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId
const LibryBookSchema = new mongoose.Schema( {
    name: String,
    author_id: {
        type: mongoose.Schema.ObjectId,
        ref: "NewAuthor"
    }, 
    publisher_id: {
        type: mongoose.Schema.ObjectId,
        ref: "Publisher"
    }, 
    price: Number,
    ratings: Number,
    isHardCover:{
        type:Boolean,
        default:false
    }
}, { timestamps: true });

module.exports = mongoose.model('LibryBook', LibryBookSchema)


 
