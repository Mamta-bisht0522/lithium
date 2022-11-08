const jwt = require("jsonwebtoken")
const firstUserModel = require("../models/newUserModel")

const createUserData = async function (req, res) {
    let data = req.body
    let createData = await firstUserModel.create(data)
    res.status(201).send({ msg: createData })
}

const loginWithUser = async function (req, res) {
   try{ let emailId = req.body.emailId
    let password = req.body.password
    let user = await firstUserModel.findOne({ emailId: emailId, password: password })
    if (!user)
        return res.status(400).send({ status: false, msg: "user data is not correct" })

    let token = jwt.sign({
        firstName: "jayantimala",
        lastName: "rao"
    }, "my second secrete key")

    res.setHeader("x-auth-token", token);
    res.status(200).send({ status: true, data: token })
   }catch(error){
    res.status(500).send({status:false,message:error})
    }
   }



const userData = async function (req, res) {
    let userId = req.params.userId
    let getData = await firstUserModel.findById(userId)
    if (!getData)
        return res.status(400).send({ status: false, msg: "No such user exists" })
    res.status(200).send({ status: true, msg: getData })
}

const updatedData = async function (req, res) {
    let userId = req.params.userId
    let data = req.body
    let update = await firstUserModel.findOneAndUpdate({ _id: userId }, { $set: data }, { new: true });
    res.status(403).send({ data: update });
}


const deletedData = async function (req, res) {
    let data = req.body
    let update = await firstUserModel.findOneAndUpdate({ _id: userId }, { $set: data }, { new: true });
    res.send({ data: update });
}


module.exports.deletedData = deletedData
module.exports.updatedData = updatedData
module.exports.userData = userData
module.exports.loginWithUser = loginWithUser
module.exports.createUserData = createUserData