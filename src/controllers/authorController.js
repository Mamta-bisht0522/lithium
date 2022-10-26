const { count } = require("console")
const authorModel = require("../models/authorModel")
const AutherModel=require('../models/authorModel')

const createAuthor=async function(req,res){
   let data=req.body
    let authordata=await authorModel.create(data)
    res.send({msg:authordata})
}
module.exports.createAuthor=createAuthor