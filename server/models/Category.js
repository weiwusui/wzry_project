const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    name:{type:String},
    parent:{type:mongoose.SchemaTypes.ObjectId,ref:'Category'}
})


schema.virtual('children',{
    localField:'_id',
    foreignField:'parent',
    justOne:false,
    ref:'Category'
})

schema.virtual('newsList',{
    localField:'_id',
    ref:'Article',
    foreignField:'categories',
    justOne:false,
    
})

schema.virtual('videosList',{
    localField:'_id',
    ref:'Video',
    foreignField:'categories',
    justOne:false,
    
})

schema.virtual('hotvideosList',{
    localField:'_id',
    ref:'HotVideo',
    foreignField:'categories',
    justOne:false,
    
})

schema.virtual('vList',{
    localField:'_id',
    ref:'V',
    foreignField:'categories',
    justOne:false,
    
})

module.exports = mongoose.model('Category',schema)