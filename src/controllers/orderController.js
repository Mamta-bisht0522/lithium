const { count } = require("console")
const OrderModel= require("../models/orderModel")
const NewUserModel= require("../models/newUserModel")
const ProductModel= require("../models/productModel")

const createOrder=async function (req,res){
    let data=req.body
    let saveUserData=await OrderModel.create(data)
    res.send({msg:saveUserData})
}

const price=async function (req,res){
    let data=req.body
    const{userId,productId}=data
    let user=await NewUserModel.findById(userId)
   
    if(!userId){
        return res.send({msg:"userId is mandatory "})
    }else if(!productId){
        return res.send({msg:"productId is mandatory "})
    }if(!user){
        res.send({msg:"userId is invalid"})
    }
    let product=await ProductModel.findById(productId)
    if(!product){
        res.send({msg:"productId is invalid"})
    }

let header=req.header.isfreeappuser
let balance=user.balance
let price=product.price
let value=0

if(header==true){
    amount=value
    data.isFreeAppUser=header
    let saveData=await OrderModel.create(data)
    res.send({data:saveData})

}else if(balance>=price){
    await NewUserModel.findOneAndUpdate({_id:userId},{$set:{balance:balance-price}})
    data.amount=price
    data.isFreeAppUser=header
    let saveData=await OrderModel.create(data)
    res.send({msg:saveData})
}else{
    res.send({msg:"insufficient balance"})
}

}
module.exports.price=price
module.exports.createOrder =createOrder