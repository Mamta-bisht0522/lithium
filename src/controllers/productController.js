const { count } = require("console")
const ProductModel= require("../models/productModel")

const createProduct=async function (req,res){
    let data=req.body
    let saveProductData=await ProductModel.create(data)
    res.send({msg:saveProductData})
}
module.exports.createProduct = createProduct