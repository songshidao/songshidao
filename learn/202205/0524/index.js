const Joi = require('joi')//joi 是一个类
const express = require('express')
const app = express()
const port =process.env.PORT || 3000
const loger = require('./loger')
const { func } = require('joi')
// 设置中间件函数
app.use(express.json())

app.use(loger)

const courses = [
    {id:1,name:'课程1'},
    {id:2,name:'课程2'},
    {id:3,name:'课程3'}

]

// 处理get请求
app.get('/',(req,res)=>{
    res.send('hello world')
})
app.get('/api/courses/:id',(req,res)=>{
    // res.send([1,2,3])
    // 请求地址ID
    // res.send(req.params.id)
    // 请求地址动态参数
    // res.send(req.params)
    // 请求地址查询字符串
    // res.send(req.query)

    const c = courses.find(course=>course.id==req.params.id)
    if(!c){
        res.status(404).send('对不起,查找课程不存在')
    }
    res.send(c.name)

})
function validataCourse(body){
    const schema =Joi.object({
        name:Joi.string().min(3).required()
    }) 
    return schema.validate(body)
}
// 处理post请求
app.post('/api/courses',(req,res)=>{
    // 使用joi从创建schema开始
    // schema是一个对象.该对象是个模型,用来描述数据
    const {error} = validataCourse(req.body)
    if(error){
        res.status(400).send(result.error.details[0].message)
    }

    // if(!req.body.name||req.body.name.length<3){
    //     res.status(400).send('名字不能为空,且不少于三个字符')
    // }
    // 用数组去接收客户端发来的请求数据
    const course = 
        {id:courses[courses.length-1].id + 1 ,
            name:req.body.name}
    
    courses.push(course)
    res.send(course)
})
// updating.data 更新数据
app.put('/api/courses/:id',(req,res)=>{
    // 查询课程,没有返回404
    const c = courses.find(course=>course.id==req.params.id)
    if(!c) return res.status(404).send('对不起,查找课程不存在')
    
    //验证,如果无效返回400
    const {error} = validataCourse(req.body)

    if(error){
        res.status(400).send(error.details[0].message)
    }
    // 更新数据
    c.name = req.body.name
    res.send(c)
})
// delete请求
app.delete('/api/courses/:id',(req,res)=>{
    const c = courses.find(course=>course.id==req.params.id)
    if(!c) return res.status(404).send('对不起,查找课程不存在')

    const i=courses.indexOf(c)
    courses.splice(i,1)
    res.send(courses)
})

app.listen(port,()=>{
    console.log(`服务器端口${port}已被监听`);
})