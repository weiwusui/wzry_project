const { assert } = require('console')
const AdminUser = require('../../models/AdminUser')
const jwt = require('jsonwebtoken')
module.exports = app => {
    const express = require('express')
    const router = express.Router({
      mergeParams:true//允许子集路由访问父级的参数
    })
    // const Category = require('../../models/Category')
    //创建资源
    router.post('/',  async (req,res) => {
      const model = await req.Model.create(req.body)
      res.send(model)
    })
    //更新资源
    router.put('/:id',  async (req,res) => {
      const model = await req.Model.findByIdAndUpdate(req.params.id,req.body)
      res.send(model)
    })
    //删除资源
    router.delete('/:id',  async (req,res) => {
       await req.Model.findByIdAndDelete(req.params.id,req.body)
      res.send({
        success:true
      })
    })
    //资源列表接口
    router.get('/', async (req,res) => {
      // const modelName = require('inflection').classify(req.params.resource)
      // const Model = require(`../../models/${modelName}`)
      const queryOptions = {}
      if (req.Model.modelName ==='Category'){
        queryOptions.populate = 'parent'
      }
      const  items = await req.Model.find().setOptions(queryOptions).limit(1000) //获取数据条数上限
      // const  items = await req.Model.find().populate('parent').limit(10) 
      res.send(items)
    })
  //资源详情
    router.get('/:id',  async (req,res) => {
      const model = await req.Model.findById(req.params.id)
      res.send(model)
    })
    //登录校验中间件
    const authMiddleware =  require('../../middleware/auth')
    const resourceMiddleware = require('../../middleware/rescource')
    app.use('/admin/api/rest/:resource',authMiddleware(),resourceMiddleware(),router)

    const multer = require('multer')
    const MAO = require('multer-aliyun-oss')
    const upload = multer({
      // dest : __dirname + `/../../uploads`
      storage:MAO({
        config:{region:'oss-cn-shanghai',
        accessKeyId:'LTAI5t788djCLtmAko9qTdh5',
        accessKeySecret:'GtFrFJTigRani5XHarqBlICB9kdAFO',
        bucket:'vue-moba-project'}
      })
    })
    app.post('/admin/api/upload',authMiddleware(), upload.single('file'), async (req,res) =>{
      const file =req.file
      // file.url=`http://localhost:3000/uploads/${file.filename}`
      // file.url=`http://139.224.18.36/uploads/${file.filename}`
      res.send(file)
    }),
    app.post('/admin/api/login',async(req,res)=>{
      const { username,password } = req.body
      
      const user = await AdminUser.findOne({username}).select('+password')
      assert(user,422,'用户名不存在')
      // if(!user){
      //   return res.status(422).send({
      //     message:'用户名不存在'
      //   })
      // }
      const isValid = require('bcrypt').compareSync(password,user.password)
      assert(isValid,422,'密码错误')
      // if(!isValid){
      //   return res.status(422).send({
      //     message:'密码错误'
      //   })
      // }
      const token = jwt.sign({id: user._id},app.get('secrect'))
      res.send({token})
    })
    
    //错误处理
    app.use(async(err,req,res,next) => {
      res.status(err.statusCode || 500).send({
        message:err.message
      })
    })
}