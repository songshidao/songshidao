// url模块: uniform统一、全球的 resource资源 location定位
// 全球资源统一定位器\符\网址
// 旧语法\API
var url = require('url')
var urlString = parse('https://www.baidu.com:8080/news/artic?query=string')
console.log(urlString);
// 新语法\API
// var urlString = 'https://www.baidu.com:8080/news/artic?query=string'
// console.log(new URL(urlString));

