const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")
// const BookController= require("../controllers/bookController")
// const UserController= require("../controllers/userController")
// const BookController= require("../controllers/bookController")
const BookController1= require("../controllers/bookController1")
const bookModel1= require("../models/bookModel1")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createUser", UserController.createUser  )
// router.get("/getUsersData", UserController.getUsersData)
// router.post("/createBook", BookController.createBook  )
// router.get("/getBooksData", BookController.getBooksData)
router.post("/createBook1", BookController1.createBook1  )
// router.get("/getBooksData1", BookController1.getBooksData1)
router.get("/booklist",BookController1.bookList)
router.post("/getBooksInYear",BookController1.getBooksInYear)
router.post("/getParticularBooks",BookController1.getParticularBooks)
// router.get("/getXINRBooks",BookController1.getXINRBooks)
router.get("/getRandomBooks",BookController1.getRandomBooks)
module.exports = router;