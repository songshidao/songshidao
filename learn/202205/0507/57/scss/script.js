const btnH = document.querySelector('#btnHamburger')
const fadeEle = document.querySelectorAll('.has-fade')

btnH.addEventListener('click',function(){
    this.classList.toggle('on')
    fadeEle.forEach(function(ele){
        ele.classList.toggle('has-fade')
    })
})