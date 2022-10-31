const PublisherModel= require("../models/newPublisherModel")

const createPublisher= async function (req, res) {
    let data2 = req.body
    let published = await PublisherModel.create(data2)
    res.send({data:published })
}
module.exports.createPublisher=createPublisher