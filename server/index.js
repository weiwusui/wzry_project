const express = require("express")
const app = express()

app.set('secrect','jaljefjehnfhje')

app.use(require('cors')())
app.use(express.json())
app.use('/uploads',express.static(__dirname+'/uploads'))

require('./routes/admin/index.js')(app)
require('./routes/web/index.js')(app)
require('./plugins/db')(app)

app.get('/',(req,res) =>(
    res.send('1')
))


app.listen(3000,()=>{
    console.log('http://localhost:3000')
})