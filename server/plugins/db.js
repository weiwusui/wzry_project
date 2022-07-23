module.exports = app => {
    const mongoose = require('mongoose')
    // const mysql = require('mysql')
    mongoose.connect('mongodb://127.0.0.1:27017/node-vue-moba',{
        useNewUrlParser:true,useUnifiedTopology: true 
    })
//     const db = mysql.createPool({
//     host:'127.0.0.1',
//     user:'root',
//     password:'wl19780509',
//     database:'my_data_01'
// })
}