const { count } = require("console")
const newBookModel=require('../models/newBooksModel')

const createBook=async function(req,res){
    let dataA=req.body
    let createdata=await newBookModel.create(dataA)
    res.send({msg:createdata})
}
module.exports.createBook=createBook