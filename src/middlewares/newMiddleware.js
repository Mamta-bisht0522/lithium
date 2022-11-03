const express = require('express');
const NewUserModel= require("../models/newUserModel")
const OrderModel= require("../models/orderModel")

const userMid= async function (req, res,next) {
    let headers = req.headers.isfreeappuser
    if (!headers ){ 
      return  res.send({msg:"the request is missing a mandatory header"})
}
    next()

}

const orderMid= async function (req, res,next) {
    let headers = req.headers.isfreeappuser
    if (!headers){
        res.send({msg:"the request is missing a mandatory header"})
}else{ 

     headers=isFreeAppUser==="true"?true:false
  } 
  next()
}
//  const userProductpresent=async function (req,res,next){
//      let headers = req.headers
//    let isFreeAppUser = headers.isfreeappuser
//      if (!isFreeAppUser){
//         res.send({msg:"error"})
//     }else{
//     let data=req.body
//     let saveMyData=await OrderModel.find().populate("userId").populate("productId")
//     res.send({msg:saveMyData})
// }
// next()
// }


// module.exports.userProductpresent=userProductpresent
module.exports.orderMid=orderMid
module.exports.userMid=userMid