const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
//
const myUserController=require("../controllers/myUserController")
const myUserModel=require("../models/myUserModel")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
router.post("/users", userController.createUser  )
router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", userController.getUserData)
router.put("/users/:userId", userController.updateUser)

////****/
router.post('/createMyUser',myUserController.createMyuser)
router.post('/loginMyUser',myUserController.loginMyuser)
router.get('/CheckMyuserData/:userId',myUserController.CheckMyuserData)
router.put("/updatedUser/:userId", myUserController.updatedUser)
router.delete("/deletedUserData/:userId", myUserController.deletedUserData)
module.exports = router;