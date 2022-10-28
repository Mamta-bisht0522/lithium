const { count } = require("console")
// const authorModel = require("../models/authorModel")
 const AuthorModel=require('../models/authorModel')

const createAuthor=async function(req,res){
   let data=req.body
    let authordata=await AuthorModel.create(data)
    res.send({msg:authordata})
}

// Write create APIs for both books and authors ---> If author_id is not available then do not accept
//  the entry(in neither the author collection nor the books collection)


module.exports.createAuthor=createAuthor