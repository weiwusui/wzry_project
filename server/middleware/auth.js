module.exports = option =>  {
    const jwt = require('jsonwebtoken')
    const assert = require('http-assert')
    const AdminUser = require('../models/AdminUser')
    return async(req,res,next) =>{
    const token = String(req.headers.authorization || '').split(' ').pop()
    // console.log(token)
    // const tokenData = jwt.verify(token,app.get('secrect'))
    assert(token,401,'请先登录')
    const {id}= jwt.verify(token,req.app.get('secrect'))
    assert(id,401,'请先登录')
    req.user = await AdminUser.findById(id)
    // console.log(tokenData)
    // console.log(req.user)
    assert(req.user,401,'请先登录')
    await next()
  }}