const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    title:{type:String},
    parent:{},
    categories:[{ type:mongoose.SchemaTypes.ObjectId,ref:'Category' }],
    body:{type:String},
})

module.exports = mongoose.model('Article',schema)