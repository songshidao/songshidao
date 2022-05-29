function a(){
    return new Promise((result)=>{
    setTimeout(() => {
        result('成功')
    }, 2000);
    },(err)=>{
console.log(err);
    })
}

async function b(){
    const msg = await a()
    console.log(msg);
}
b()