const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const axiosController=require("../controllers/axiosController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)
router.post("/cowin/getOtp", CowinController.getOtp)


// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date
router.get("/getSessionsByDistricts", axiosController.getSessionsByDistricts)
router.post("/getMemes", axiosController.getMemes)
router.get("/getCityWeather", axiosController.getCityWeather)
router.get("/sortcities", axiosController.sortcities)
router.get("/getTemprature", axiosController.getTemprature)



module.exports = router;