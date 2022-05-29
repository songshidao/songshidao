var http = require('http')

// 创建服务器
var server = http.createServer(function(req,res){
    res.write('heelo world')
    res.end()
})

server.listen(8000,function(){
    console.log('服务器已运行在8000端口');
})