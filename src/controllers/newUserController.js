const { count } = require("console")
const NewUserModel= require("../models/newUserModel")

const createNewUser=async function (req,res){
    let data=req.body
    let saveUserData=await NewUserModel.create(data)
    res.send({msg:saveUserData})
}
module.exports.createNewUser=createNewUser