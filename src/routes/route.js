const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
const newAuth = require("../middleware/newAuth")
//solution 
const newUserController = require("../controllers/newUserController")
const newUserModel = require("../models/newUserModel")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)
router.post("/login", userController.loginUser)
//The userId is sent by front end
router.get("/users/:userId", userController.getUserData)
router.post("/users/:userId/posts", userController.postMessage)
router.put("/users/:userId", userController.updateUser)
// router.delete('/users/:userId', userController.deleteUser)

//solution
router.post("/createUserData", newUserController.createUserData)
router.post("/loginWithUser", newUserController.loginWithUser)
router.get("/userData/:userId", newAuth.middleware, newUserController.userData)
router.put("/updatedData/:userId", newAuth.middleware, newUserController.updatedData)
router.delete("/deletedData/:userId", newAuth.middleware, newUserController.deletedData)

module.exports = router;