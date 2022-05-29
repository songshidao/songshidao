const express = require('express')

// 创建express实例
const app = express()
// 创建监听端口
app.listen(3000)

// 对啊app实例进行配置,用ejs引擎渲染文件
app.set('view engine','ejs')
// 指定渲染视图目录
// app.set('views','public')

// 处理请求
app.get('/',(req,res)=>{
    const blogs = [
    {title:'博客文章一',content:'博客文章一内容摘要.博客文章一内容摘要博客文章一内容摘要博客文章一内容摘要博客文章一内容摘要博客文章一内容摘要'},
    {title:'博客文章二',content:'博客文章一内容摘要.博客文章一内容摘要博客文章一内容摘要博客文章一内容摘要博客文章一内容摘要博客文章一内容摘要'},
    {title:'博客文章三',content:'博客文章一内容摘要.博客文章一内容摘要博客文章一内容摘要博客文章一内容摘要博客文章一内容摘要博客文章一内容摘要'}
]
    res.render('index',{title:'首页',blogs})
})
// 关于我页面
app.get('/about',(req,res)=>{
    res.render('about',{title:'关于我'})
})
// 博客页面
app.get('/blog',(req,res)=>{
    res.render('blog',{title:'写博客'})
})
// 404页面
app.use((req,res)=>{
    res.status(404).res.render('404',{title:'找不到此文件'})
})