const NewAuthorModel= require("../models/newAuthorModel")

const CreateAuthor= async function (req, res) {
    let author = req.body
    let authorData= await NewAuthorModel.create(author)
    res.send({data: authorData})
}
module.exports.CreateAuthor=CreateAuthor