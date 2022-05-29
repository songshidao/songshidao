const mongoose = require('mongoose')

// 链接数据库
mongoose.connect('mongodb://localhost:27017/myapp')
    .then(()=>console.log('mongodb链接成功'))
    .catch(err=>console.log('失败'))

const courseSchema = new mongoose.Schema({
    name:String,
    author:String,
    tags:[String],
    date:{ type:Date,default: Date.now },
    isPublished:Boolean
})

const Course = mongoose.model('Course',courseSchema)
async function createCourse(){
    const course = new Course({
        name:'Node.js',
        author:'张三',
        tags:['node'],
        isPublished:true
    })
    
    const result = await course.save()
    console.log(result);
}

createCourse()