const { count } = require("console")
const AuthorModel = require("../models/authorModel")
const NewbookModel= require("../models/mybookModel")
const createBookData= async function (req, res) {
    let data= req.body
    let allData= await NewbookModel.create(data)
    res.send({msg: allData})
}

const getBooksByCb=async function(req,res){
    let data= await AuthorModel.findOne({ author_name: "Chetan Bhagat" }).select({ _id:1})
    let savedData= await NewbookModel.find({author_id:data})
    res.send({msg:savedData})
}


const authorWithStates=async function(req,res){
    let data= await NewbookModel.findOneAndUpdate({ bookName: "Two states" },{price:100},{new:true})
    let savedData= await AuthorModel.findOne({_id:data.author_id}).select({author_name:1,_id:0})
    res.send({msg:savedData,data})
}

const booksWithPrice=async function(req,res){
    let data= await NewbookModel.find({price:{$gte:50,$lte:100}}).select({author_id:1,_id:0 })
    let arr=[]
    // res.send({msg:data})
    for (let index=0;index<data.length;index++){
    const elem=data[index];
    let author=elem.author_id
    let savedData= await AuthorModel.find({_id:author}).select({author_name:1,_id:0})
     arr.push(savedData)
    }
      res.send({msg:arr.flat(Infinity)})
}


module.exports.booksWithPrice=booksWithPrice
module.exports.authorWithStates=authorWithStates
module.exports.getBooksByCb=getBooksByCb
module.exports.createBookData=createBookData

