// const LibryBookModel= require("../models/newBookModel")
// const NewAuthorModel= require("../models/newAuthorModel")
// const PublisherModel= require("../models/newPublisherModel")

// const putNewKey= async function (req, res) {
//     let book = req.param._id
//     let newBookCreated = await LibryBookModel.findOneAndUpdate({book},
//     {name: req.body.name,
//     author_id: req.body.author_id,
//     publisher_id:req.body.publisher_id,
//     price: req.body.price,
//     ratings: req.body.ratings
// })
//     res.send({data: newBookCreated})
// }
// module.exports.putNewKey=putNewKey