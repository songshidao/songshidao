// 引入http模块
const http = require('http')
const fs = require('fs')

// createServer(requestListener())返回一个server对象
    // server.listening()
    // server.close()
// requestListener(): 请求监听器,是回调函数,等待客户端发来请求
const server = http.createServer((req,res)=>{
    // console.log(req);
    // req.httpVersion 版本 1.1
    // req.headers
    // req.rawheaders
    // req.url:'/
    // req.method:\GET
    // console.log(req.url,req.method);
    // console.log(res);
    // res.serHeader(name,value)|writeHead()|write()|end()|getHeader()
    // name:字符串,不区分大小写
    // value:数值,字符串,数组,对象,JSON等任意类型

    // res.setHeader('Content-Type','text/plain')
    // res.write('hello world')

    // res.setHeader('Content-Type','text/html')
    // res.write('<h1>hello world</h1>')

    // res.end()


    

    // 路由: route
    let path='./public/'
    switch(req,url){
        case'/':
            path+='index.html'
            res.statusCode=200
            break
        case '/about':
            path+='about.html'
            res.statusCode=200
            break
        case '/about-us':
            res.setHeader('Location','/about')
            res.statusCode=301
            break
        case '/new':
            path+='new.html'
            res.statusCode=200
            break
        default:
            path+='404.html'
    }
    fs.readFile('./public/index.html',(err,data)=>{
        if(err){
            console.log(err);
            res.end()
        }else{
            res.write(data)
            res.end()
        }
    })

})
// listen(port,hostname,backlog,callback)没有返回值
const port=3000
const hostname='127.0.0.1'||'localhost'
server.listen(port,hostname,()=>{
    console.log('服务器已运行'+port);
})