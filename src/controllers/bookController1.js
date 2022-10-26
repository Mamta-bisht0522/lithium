const { count } = require("console")
const  Book1Model = require("../models/bookModel1")


const createBook1= async function (req, res) {
    let data= req.body
    let savedData= await Book1Model.create(data)
    res.send({msg: savedData})
}

const bookList=async function(req,res){
  let book=await Book1Model.find().select( { bookName:1, authorName :1}) // SELECT keys that we want
res.send({msg:book})
}
const getBooksInYear=async function(req,res){
let data1=req.body
let mydata1=await Book1Model.find(data1)
    res.send({msg:mydata1}) 
}

const getParticularBooks=async function(req,res){
    let data3=req.body
    let bodyData= await Book1Model.find(data3)
res.send({msg:bodyData})
}
// const getXINRBooks=async function(req,res){
//     let indianrupee=await Book1Model.find({prices:{indianPrice: { $in: [rs100||rs200||rs300]}}})
// res.send({msg:indianrupee})
// }     

const getRandomBooks=async function(req,res){
    let databook=await Book1Model.find({$and:[{totalPages:{$lt:500}},{isStockAvailable:true}]})
    res.send ({msg:databook})
}




module.exports.getParticularBooks=getParticularBooks
// module.exports.getXINRBooks=getXINRBooks
// bookList : gives all the books- their bookName and authorName only 
// getBooksInYear: takes year as input in post request and gives list of all books published that year

module.exports.createBook1= createBook1
module.exports.getBooksInYear=getBooksInYear
module.exports.getRandomBooks= getRandomBooks
module.exports.bookList=bookList