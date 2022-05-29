require('../models/db')
// 创建Category集合
const Category = require('../models/Category')


exports.homepage = async(req,res) => {
    try{
        // 从数据库读取Category集合里的数据:[]数组
        const categiries = await Category.find().limit(10)
        res.render('index',{title:'MT外卖 - 首页',categiries})
    } catch(error){
        res.status(500).send(error.message)
    }
}

