const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const commonMW = require ("../middlewares/commonMiddlewares")
const newUserController=require("../controllers/newUserController")
const productController=require("../controllers/productController")
const orderController=require("../controllers/orderController")
const newUserModel=require("../models/newUserModel")
const productModel=require("../models/productModel")
const orderModel=require("../models/orderModel")
const newMiddleware=require("../middlewares/newMiddleware")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//Can we set the 'next' input parameter in a route handler?
//What is the primary difference between a middleware and a route handler?
router.post("/createBook", commonMW.myMiddleware,BookController.createBook, function(req, res, next){
    res.send("Ending the cycle")
}  )

router.post("/createUser", commonMW.myMiddleware, UserController.createUser)
router.get("/dummy1", commonMW.myOtherMiddleware, UserController.dummyOne)
router.get("/dummy2", commonMW.myOtherMiddleware, UserController.dummyTwo)
router.get("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.mid4, UserController.basicCode)

router.post("/createNewUser",  newUserController.createNewUser )
router.post("/createProduct",  productController.createProduct)
router.post("/createOrder",  orderController.createOrder)
router.post("/userMid", newMiddleware.userMid , newUserController.createNewUser)
router.post("/orderMid", newMiddleware.orderMid , orderController.createOrder)
//router.post("/userProductpresent", newMiddleware.userProductpresent , orderController.createOrder)
router.post("/price", orderController.price)

module.exports = router;