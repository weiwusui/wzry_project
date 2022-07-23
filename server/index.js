const express = require("express")
const app = express()


app.use(require('cors')())
app.use(express.json())

require('./routes/admin/index.js')(app)
require('./plugins/db')(app)

app.get('/',(req,res) =>(
    res.send('1')
))


app.listen(3000,()=>{
    console.log('http://localhost:3000')
})