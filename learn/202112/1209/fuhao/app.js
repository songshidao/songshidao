//https://randomuser.me/api
const data = {"results": [
{"gender": "女","name": {"title": "Mademoiselle","first": "刘","last": "丽丽"}},
{"gender": "男","name": {"title": "Mademoiselle","first": "张","last": "老板"}},
{"gender": "女","name": {"title": "Mademoiselle","first": "王","last": "兰兰"}},
{"gender": "男","name": {"title": "Mademoiselle","first": "孙","last": "悟空"}},
{"gender": "女","name": {"title": "Mademoiselle","first": "糖","last": "三藏"}},
]}

const oMain = document.querySelector('#main')
const addRicheBtn = document.querySelector('#add-user')
const doubleBtn = document.querySelector('#double')
const sortBtn = document.querySelector('#sort')
const millionBtn = document.querySelector('#show-millionaires')
const calcBtn = document.querySelector('#calculate-wealth')
// let money = parseInt(Math.random()*1000000)
let arr = []
createRich()
createRich()
createRich()

function createRich(){
    let oName = data.results[parseInt(Math.random()*5)].name
    let oRich = {
        name:`${oName.first}${oName.last}`,
        money:parseInt(Math.random()*1000000)
    }
    arr.push(oRich)
    render(arr)
}

function render(Arr){
    oMain.innerHTML = '<h2><strong>姓名</strong> 财富</h2>'
    Arr.forEach((v) =>{
        
        const oDiv = document.createElement('div')
        oMain.appendChild(oDiv)
        oDiv.className = 'person'
        oDiv.innerHTML = `<strong>${v.name}</strong>${v.money}`
        console.log(oDiv)

    })
}
function doublemoney(){
    arr =  arr.map((v)=>{
        return {name:v.name, money : v.money * 2}
    })
    render(arr)

}
function sort(){
    arr.sort(function(a,b){return b.money - a.money})
    render(arr)
}
function showmillion(){
    arr = arr.filter((v)=>{
        return v.money>1000000
    })
    render(arr)
}
function calcnum(){
   arr = arr.reduce((t,v)=>{
      return t + v.money 
    },0)
    // render(arr)
    console.log(arr)
}
addRicheBtn.addEventListener('click',createRich)
doubleBtn.addEventListener('click',doublemoney)
sortBtn.addEventListener('click',sort)
millionBtn.addEventListener('click',showmillion)
calcBtn.addEventListener('click',calcnum)





