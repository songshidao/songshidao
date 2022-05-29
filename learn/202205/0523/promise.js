// pormise是一个class类(构造函数)
let p = new Promise(function(resolve,reject){
    // resolve
    // reject
    // promise对象有三种状态:pending悬而未决,fullfilled成功,failed失败
    // 返回值也是promise
})
p.then((result)=>{
    console.log(result);
},(err)=>{
    console.log(err);
})