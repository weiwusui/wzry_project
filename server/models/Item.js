const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    name:{type:String},
    icon:{type:String},
    parent:{}
})
module.exports = mongoose.model('Item',schema)