const express = require('express')
// 端口号
const port = 3000
// 创建服务器实例
const app = express()
// 监听请求端口
app.listen(port)
// 收到请求时调用
app.get('/',(req,res)=>{
    //res对象的send做出响应
    // res.send('6655465')
    // res.send('<h2>6655465</h2>')
    res.sendFile('./public/index.html',{root:__dirname})
    // 绝对路径https://www.bilibili.com/
    // 电脑绝对路径E:\work\work
})
app.get('/about',(req,res)=>{
    res.sendFile('./public/about.html',{root:__dirname})
})
app.get('/new',(req,res)=>{
    res.sendFile('./public/new.html',{root:__dirname})
})
app.use((req,res)=>{
    res.status(404).sendFile('./public/404.html',{root:__dirname})
})

