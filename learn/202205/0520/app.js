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

    app.use(express.urlencoded({extended:true}))
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
// 首页
app.get('/',(req,res) => {
    res.redirect('/blogs')
})
// 用户点击写博客链接,服务端要把add.ejs 的内容返回给浏览器
app.get('/blogs/add',(req,res) => {
    res.render('add',{title:'写博客'})
})
// 发送数据
app.post('/blogs',(req,res) => {
    const blog = new Blog(req.body)
    console.log(req.body);
    // 存储到数据库
    blog.save()
     .then(result => {
             res.redirect('/blogs')
     })
     .catch(err => console.log(err))
 })
// 读取全部数据
app.get('/blogs',(req,res) => {
   Blog.find().sort({createdAt: -1 })
    .then(result => {
        res.render('index',{
            blogs:result,
            title:'全部博客'
        })
    })
    .catch(err => console.log(err))
})

app.get('/blogs/:id',(req,res) => {
    const id= req.params.id
    Blog.findById(id)
         .then(result => {
             res.render('details',{
                blog:result,
                title:'博客详情'
             })
         })
         .catch(err => console.log(err))
})

// 处理删除请求
app.delete('/blogs/:id',(req,res) => {
    const id= req.params.id
    Blog.findByIdAndDelete(id)
         .then(result => {
             res.json({redirect:'/blogs'})
         })
         .catch(err => console.log(err))
})

// 读取指定ID:6285ec00287396ef205903fd 的数据
// app.get('/show-blog',(req,res) => {
//     Blog.findById('6285ec00287396ef205903fd')
//      .then(result => res.send(result))
//      .catch(err => console.log(err))
//  })
// 处理请求
// app.get('/',(req,res)=>{
//     const blogs = [
//     {title:'博客文章一',content:'博客文章一内容摘要.博客文章一内容摘要博客文章一内容摘要博客文章一内容摘要博客文章一内容摘要博客文章一内容摘要'},
//     {title:'博客文章二',content:'博客文章一内容摘要.博客文章一内容摘要博客文章一内容摘要博客文章一内容摘要博客文章一内容摘要博客文章一内容摘要'},
//     {title:'博客文章三',content:'博客文章一内容摘要.博客文章一内容摘要博客文章一内容摘要博客文章一内容摘要博客文章一内容摘要博客文章一内容摘要'}
// ]
//     res.render('index',{title:'首页',blogs})
// })
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
    res.status(404).render('404',{title:'找不到此文件'})
})