const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const newBookController=require("../controllers/newBookController")
const newAuthorController=require("../controllers/newAuthorController")
const newPublisherController=require("../controllers/newPublisherController")
const newBookModel=require("../models/newBookModel")
const newAuthorModel=require("../models/newAuthorModel")
const newPublisherModel=require("../models/newPublisherModel")
const putNewKey=require("../controllers/put")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )
router.get("/getAuthorsData", authorController.getAuthorsData)
router.post("/createBook", bookController.createBook  )
router.get("/getBooksData", bookController.getBooksData)
router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

router.post("/createNewBook",newBookController.createNewBook  )
router.post("/createNewauthor",newAuthorController.CreateAuthor  )
router.post("/createNewPublisher",newPublisherController.createPublisher  )
router.get("/booksAuthorPubliser",newBookController.booksAuthorPubliser)
router.get("/bookAuthorPubPrsnt", newBookController.bookAuthorPubPrsnt)
// router.get("/putNewKey",putNewKey.putNewKey)

module.exports = router;