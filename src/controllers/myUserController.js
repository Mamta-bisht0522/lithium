const jwt = require("jsonwebtoken")
const myUserModel = require("../models/myUserModel");

//solution-01

const createMyuser = async function (req, res) {
    let data = req.body
    let savedata = await myUserModel.create(data)
    res.send({ msg: savedata })
}

//solution-02

const loginMyuser = async function (req, res) {
    let userMail = req.body.emailId
    let passward = req.body.passward
    let mydata = await myUserModel.findOne({ emailId: userMail, passward: passward })
    if (!mydata)
        return res.send({ status: false, msg: "userdetails are not correct" })
    let token = jwt.sign(
        {
            userId: mydata._id.toString(),
            address: "newdelhi",
            mobile: "8945617890",
            emailId : "mb@,gmail.com",
        }, "my first secret")
    res.setHeader("x-auth-token", token);
    res.send({ status: true, token: token })
}

//solution-03

const CheckMyuserData = async function (req, res) {
    let token = req.headers["x-Auth-token"]
    if (!token) token = req.headers["x-auth-token"]
    if (!token) return res.send({ status: false, msg: "token is not present" })


    let myDecodedToken = jwt.verify(token, "my first secret")

    if (!myDecodedToken) return res.send({ status: false, msg: "plz enter valid token" })
    let userId = req.params.userId
    let user = await myUserModel.findById(userId) 
    if (!user) {
        return res.send({ status: false, msg: "no such user exists" })
    } else { return res.send({ status: true, data: user }) }
}

//solution-04

const updatedUser = async function (req, res) {
    let token = req.headers["x-Auth-token"]
    if (!token) token = req.headers["x-auth-token"]
    if (!token) return res.send({ status: false, msg: "token is not present" })

    let userId = req.params.userId
    let userData = req.body
    let updatedData = await myUserModel.findOneAndUpdate({ _id: userId }, { $set: userData }, { new: true })
    res.send({ status: true, data: updatedData })


}

//solution-05
const deletedUserData = async function (req, res) {
    let token = req.headers["x-Auth-token"]
    if (!token) token = req.headers["x-auth-token"]
    if (!token) return res.send({ status: false, msg: "token is not present" })

    let userId = req.params.userId
    let userData = req.body
    let deletedData = await myUserModel.findOneAndUpdate({ _id: userId }, { $set: userData},{ new: true })
    res.send({ status: true, data: deletedData })
}


module.exports.deletedUserData=deletedUserData
module.exports.updatedUser = updatedUser
module.exports.CheckMyuserData = CheckMyuserData
module.exports.loginMyuser = loginMyuser
module.exports.createMyuser = createMyuser


