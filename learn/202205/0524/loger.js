function log(req,res,next){
    console.log('已登陆');
    next()
}

module.exports = log