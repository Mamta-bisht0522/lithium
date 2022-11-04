const LibryBookModel= require("../models/newBookModel")
const NewAuthorModel= require("../models/newAuthorModel")
const PublisherModel= require("../models/newPublisherModel")
//solutions-
const createNewBook= async function (req, res) {
    let book = req.body
    let newBookCreated = await LibryBookModel.create(book)
    res.send({data: newBookCreated})
}
//sol-03
const bookAuthorPubPrsnt=async function (req, res) {
    let book = req.body
if (!book.author_id){
    return res.send({msg:"authorId is mandatory"})
}

 let author=await NewAuthorModel.findById(book.author_id)
 if (!author){
    return res.send({msg:"authorId is not valid"})
 }


if (!book.publisher_id){
    return res.send({msg:"publisherId is mandatory"})
}
let publisher=await PublisherModel.findById(book.publisher_id)
if (!publisher){
    return res.send({msg:"publisherId is not valid"})
}
let newBookCreated = await LibryBookModel.create(book)
    res.send({data: newBookCreated})

}
  //sol-04 
const booksAuthorPubliser = async function (req, res) {
    let complifire = await LibryBookModel.find().populate('publisher_id').populate('author_id')
    res.send({data: complifire})
} 


//sol-05
//part2
const newBooksAuthorPubliser=async function (req, res) {
    let arr1 = await NewAuthorModel.find({rating:{$gt: 3.5} })
    let newarr=[]

    for(i of arr1){

        iid=i._id

       let tosend= await LibryBookModel.findOneAndUpdate({author_id:iid},{$inc:{"price":10}},{new:true})
        newarr.push(tosend)
    }
    res.send({mess:newarr})
}

//part1
// const newBooksAuthorPubliser1 = async function (req, res) {
   
//     let obj1 = await PublisherModel.find({name: "Penguin" })
//     let id1 = obj1._id
//     let obj2 = await PublisherModel.find({name: "harpercollins" })
//     let id2 = obj2._id

//     let newbooks = await LibryBookModel.updateMany({publisher_id:[id1,id2]},{ $set: {"isHardCover":true} },{new:true})
//     let updatedbooks = await LibryBookModel.find({"isHardCover":true})
//     res.send({data:updatedbooks})
// }
    

// module.exports.newBooksAuthorPubliser1=newBooksAuthorPubliser1
module.exports.newBooksAuthorPubliser=newBooksAuthorPubliser
module.exports.bookAuthorPubPrsnt=bookAuthorPubPrsnt
module.exports.booksAuthorPubliser=booksAuthorPubliser
module.exports.createNewBook=createNewBook
