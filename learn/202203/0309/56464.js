//获取三张片子的父级容器：slider = slide + slide + slide
const slider = document.querySelector('.slider-container')
const slides = Array.from(slider.querySelectorAll('.slide'))
let lastPos = 0
let currentPos = 0

let currentTranslate = 0
let lastTranslate = 0

let currentIndex = 0
let animationID = 0
let isDrag = false

//为单个slide批量添加事件
slides.forEach((slide,index)=>{
    slide.addEventListener('touchstart',touchStart(index))
    slide.addEventListener('touchmove',touchMove)
    slide.addEventListener('touchend',touchEnd)
})

function touchStart(index){
    return function(ev){
        lastPos = ev.touches[0].clientX
        currentIndex = index
        isDrag = true
        animationID = window.requestAnimationFrame(cb)
    }
}
function touchMove(ev){
    if(isDrag){
        //当前slider的位置
        currentPos = ev.touches[0].clientX
        //当前slider过度到哪里
        currentTranslate = currentPos - lastPos + lastTranslate
    }
}
function touchEnd(){
    isDrag = false
    cancelAnimationFrame(animationID)

    let result =  currentTranslate - lastTranslate
    if (result < -100 && currentIndex < slides.length -1)  
    currentIndex++
    if(result > 100 && currentIndex>0 ) currentIndex--
    
    currentTranslate = currentIndex * -window.innerWidth
    slider.style.transform = `translateX(${currentTranslate}px)`
    lastTranslate = currentTranslate
}

function cb(){
    slider.style.transform = `translateX(${currentTranslate}px)`
    if(isDrag) requestAnimationFrame(cb)
}