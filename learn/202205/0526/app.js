const express = require('express')
const ejs = require('ejs')

// 创建服务器
const app = express()
const port = process.env.PORT || 3000

app.use(express.static('public'))
app.set('view engine','ejs')

const routes = require('./server/routes/mtRoutes')
app.use('/',routes)

app.listen(port,()=>{
    console.log('监听的端口是'+port);
})