var fs = require('fs')

// 写入内容
fs.writeFileSync('./test.txt','Hello World',function(err){
if(err){
    return console.error(err)
}
console.log('写入成功');
})

// 读取文件内容
fs.readFile('./test.txt',function(err,data){
    if(err){
        return console.reeor(err)
    }
    console.log('异步读取的内容' + data.toString());
})

// 同步读取
// var data= fs.readFileSync('./test.txt')
// console.log('同步读取的内容:'+ data.toString());