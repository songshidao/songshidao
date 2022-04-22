// 获取元素
const slider = document.querySelector('.slider-container')
const slides = Array.from(slider.querySelectorAll('.slide'))
let startPos = 0,
	currentIndex = 0,
	animationID = 0,
	isDrag = false,
	xPos = 0,
	lastPosition = 0,
	currentPostion= 0



// 给slide批量添加事件
slides.forEach((slide,index)=>{
	slide.addEventListener('touchstart',touchStart(index))
	slide.addEventListener('touchmove',touchMove)
	slide.addEventListener('touchend',touchEnd)
})

function touchStart(index){
	return function(ev){
		startPos = ev.touches[0].clientX
		currentIndex = index
		isDrag = true
		animationID = window.requestAnimationFrame(cb)
	}
}

function touchMove(ev){
	if(isDrag){
		currentPostion = ev.touches[0].clientX
		xPos = currentPostion-startPos + lastPosition
	}
	
}

function touchEnd(ev){
	let result = xPos-lastPosition
	isDrag = false
	cancelAnimationFrame(animationID)
	if(result<-100)currentIndex++
	if(result>100)currentIndex--
	xPos = currentIndex*-window.innerWidth
	slider.style.transform = `translateX(${xPos}px)`
	lastPosition = xPos
}

function cb(){
setSliderPosition()
if(isDrag)requestAnimationFrame(cb)
}

function setSliderPosition(){
	console.log(xPos)
	// slider.style.transform = `tanslate(${xPos}px)`
	slider.style.transform = `translate(${xPos}px)`
}
// 目标,滑屏让slider.style.transform = `tanslateX(xPos)px`