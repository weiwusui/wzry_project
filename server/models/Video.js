const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    title:{type:String},
    plays:{type:String},
    cover:{type:String},
    categories:[{ type:mongoose.SchemaTypes.ObjectId,ref:'Category' }],
},{
    timestamps:true
})

module.exports = mongoose.model('Video',schema)