const jwt = require("jsonwebtoken")
const express = require('express');
const firstUserModel = require("../models/newUserModel")


const middleware = async function (req, res, next) {
   try{
     let user = await firstUserModel.findById(req.params.userId)
    if (!user) return res.status(401).send({ status: false, msg: 'No such user exists' })

    let token = req.headers["x-Auth-token"]
    if (!token) token = req.headers["x-auth-token"]
    if (!token)
        res.status(400).send({ status: false, msg: "token must be present" })

    let decodedToken = jwt.verify(token, "my second secrete key")
    if (!decodedToken)
        return res.status(403).send({ status: false, msg: "token is invalid" })
   }catch(error){
    return res.status(500).send({ status: false, message:error })
   }
    next()

}


module.exports.middleware = middleware

