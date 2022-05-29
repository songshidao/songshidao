// 导入内置模块
const http = require('http')
const fs = require('fs')
const url = require('url')
const mime = require('mime')
// const { resolve } = require('path')
// const { rejects } = require('assert')

// 创建构造函数 StaticServer
class StaticServer{
    constructor(){
        //在这里添加StaticServer 类的属性
        this.server = null,
        this.port=8080,
        this.host='127.0.0.1',
        this.rootPath = './public',
        this.homePage = '/index.html'
    }
    // 在这里添加StaticServer的方法
    start(){
        let  This=this
        // createServer(requestListener)返回一个HTTP Server对象
        // requestListener请求监听函数(1.监听2.处理请求3.作出回应)
        this.server = http.createServer(function(req,res){
        // req:表现请求对象(IncomingMessage对象:进来的消息对象)
        let pathname = url.parse(req.url).pathname
        // pathname: news/2002/index.html
        // http:www.asd.com/news/2002/index.html?p=1&author=dfd
        let reqUrl = pathname === '/' ? This.homePage : pathname
        let fileUrl = This.rootPath + reqUrl
        //   ./public/index.html
        console.log(fileUrl);
        // 先查询请求文件是否存在
        This.checkFile(fileUrl)
        // 如果reqUrl存在,我们读取文件内容
            .then(()=>{
               return This.readFilecontent(fileUrl)
            })
            .then((data)=>{
                console.log(data);
                return This.sendData(res,data,pathname)
            })
            .catch(()=>{
                 This.catchErr(res)
            })
        })
        this.server.listen(this.port,()=>{
            // 向终端输出提示信息
            console.log('监听端口:'+this.port);
        })
    }
    // 检测请求的文件是否存在
    checkFile(filepath){
        return new Promise((resolve,reject)=>{
            // 借助nodeJS的fs模块
            fs.access(filepath,fs.constants.R_OK,(err)=>{
                if(err){
                    reject(err)
                }else{
                    resolve('success')
                }
            })
        })
    }
    // 使用promise包装读取文件的方法
    readFilecontent(path){
        return new Promise((resolve,rejects)=>{
            fs.readFile(path,'utf8',(err,data)=>{
                if(err){
                    console.log(222);
                    rejects(err)
                }else{
                    console.log(111);
                    resolve(data)
                }
            })
        })
    }
    sendData(res,data,url){
        // res.writeHead(200,{'Content-type':'text/html;charset=utf-8'})
        res.writeHead(200, { 'Content-type': 'text/html;charset=utf-8' })
        res.write(data)
        res.end()
    }
    // 捕获404错误
    catchErr(res){
        // res.writeHead(404,{'Content-type':'text/html;charset=utf-8'})
        res.writeHead(404, { 'Content-type': 'text/html;charset=utf-8' })
        res.write('404 Error,没找到文件')
        res.end()
    }
}

module.exports = StaticServer