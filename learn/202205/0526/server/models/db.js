const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/meituan')
    .then(()=>console.log('链接成功'))
    .catch(err=>console.error('链接失败'))

const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
        Image:{
            type:String,
            required:true
        }
})