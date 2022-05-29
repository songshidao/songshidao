// blog.js用于设计 文章/blog 数据模型
const mongoose = require('mongoose')

var blogSchema = mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    summary:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }
  },{ timestamp:true });

  const Blog = mongoose.model('Blog',blogSchema)
  module.exports = Blog