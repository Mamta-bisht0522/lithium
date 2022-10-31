const LibryBookModel= require("../models/newBookModel")
const NewAuthorModel= require("../models/newAuthorModel")
const PublisherModel= require("../models/newPublisherModel")
const createNewBook= async function (req, res) {
    let book = req.body
    let newBookCreated = await LibryBookModel.create(book)
    res.send({data: newBookCreated})
}
const booksAuthorPubliser = async function (req, res) {
    let complifir = await LibryBookModel.find().populate('publisher_id').populate('author_id')
    res.send({data: complifir})
}  
const bookAuthorPubPrsnt = async function (req, res) {
    let data = req.body
    const { author, publisher } = data
    // if (!author) {res.send({ msg: "author detail is required" })}else
    // if (!publisher) {res.send({ msg: "publisher detail is required" })}

//    // If present, make sure the authorId is a valid ObjectId in the author collection. If not then send
//     // an error message that the author is not present.
//     if(!isValidObjectId(author)){
//         return res.send({msg:"authorId id not valid objectId"}

    //let Publisher = await PublisherModel.findById({ _id: Publisher })
    //let Author = await NewAuthorModel.findById({ _id: Author })
//     if (!publisher) {
//         res.send({ msg: "this publisher not found your database" })
//     } else if (!author) {
//         res.send({ msg: "this Author not found your database" })
//     } else {
//         let saveData = await LibryBookModel.create(data)
//         res.send({ msg: saveData })
//     }

 }
module.exports.bookAuthorPubPrsnt=bookAuthorPubPrsnt
module.exports.booksAuthorPubliser=booksAuthorPubliser
module.exports.createNewBook=createNewBook
