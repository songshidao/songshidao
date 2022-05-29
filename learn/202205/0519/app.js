const express = require('express')
const { default: mongoose } = require('mongoose')
const Blog = require('./models/blog')

// 创建express实例
const app = express()
// 创建监听端口
// app.listen(3000)

// 对啊app实例进行配置,用ejs引擎渲染文件
app.set('view engine','ejs')
// 指定渲染视图目录
// app.set('views','public')
const dbURI = 'mongodb+srv://songshidao:abcd1234@cluster0.uwbbp.mongodb.net/?retryWrites=true&w=majority'
// {useNewUrlParser:true,useUnifiedTopology:ture}
mongoose.connect(dbURI)
    // .then(result => console.log('success'))
    .then(result => app.listen(3000, () => {
        console.log('服务器运行在:3000');
    }))
    .catch(err => console.log(err))
// 上传数据
app.get('/add-blog',(req,res) => {
    const blog = new Blog({
        title:'博客标题三',
        summary:'博客文章一的摘要内容',
        body:'博客文章一的内容,博客文章一的内容,博客文章一的内容,博客文章一的内容,博客文章一的内容'
    })
    blog.save()
        .then(result => res.send(result))
        .catch(err => console.log(err))
})

// 读取全部数据
app.get('/all-blogs',(req,res) => {
   Blog.find()
    .then(result => res.send(result))
    .catch(err => console.log(err))
})

// 读取指定ID:6285ec00287396ef205903fd 的数据
app.get('/show-blog',(req,res) => {
    Blog.findById('6285ec00287396ef205903fd')
     .then(result => res.send(result))
     .catch(err => console.log(err))
 })
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