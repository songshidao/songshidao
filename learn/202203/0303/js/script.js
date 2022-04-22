const sliderWin = document.querySelector('#silder')
const sliderBox = sliderWin.querySelector('.slider-box')
const imgW = sliderWin.offsetWidth
const dots = sliderWin.querySelectorAll('span')
console.log(dots[0])
let n1 = 0,
	n2 = 0,
	x = 0,
	sliderBoxX = 0
mySlider()

function mySlider() {
	let timer = null
	autoPlay()
	function autoPlay(){
		timer = setInterval(function() {
			n1++
			n1= n1%dots.length
			switchImg()
		}, 2000)
	}
	function switchImg() {
		n2 = -n1 * imgW
		sliderBox.style.transform = `translateX(${n2}px)`
		sliderBox.style.transition = '1s'
		
		for(let i=0;i<dots.length;i++){
			dots[i].classList.remove('active')
		}
		dots[n1].classList.add('active')
	}
	sliderBox.addEventListener('touchstart',function(ev){
		clearTimeout(timer)
		ev = ev.changedTouches[0]
		x = ev.pageX
		sliderBoxX = n2
	})
	sliderBox.addEventListener('touchmove',function(ev){
		sliderBox.style.transition = 'none'
		ev = ev.changedTouches[0]
		let  dis=ev.pageX - x
		n2 = sliderBoxX + dis
		sliderBox.style.transform = `translateX(${n2}px)`
	})
	sliderBox.addEventListener('touchend',function(ev){
		n1= -Math.round(n2/imgW)
		if(n1<0){
			n1=0
		}else if(n1>dots.length-1){
			n1=dots.length-1
		}
		switchImg()
		autoPlay()
	})
}
preLoading()
function preLoading(){
	// 获取元素
	
	const onboarding = document.querySelector('.onboarding')
	const images = document.querySelectorAll('img')
	const arrUrl = []
	for(i=0;i<images.length;i++){
		arrUrl.push(images[i].src)
	}
let imgAllloaded = false
let animationEnd = false
let startTime = new Date().getTime()
let timer = null
let num = 0

for(let i=0;i<arrUrl.length;i++){
	let oImage =new Image()
	oImage.src = arrUrl[i]
	oImage.onload = function(){
		num++
		if(num == arrUrl.length){
			console.log('图片已全加载')
			imgAllloaded = true
		}
	}
}

onboarding.addEventListener('transitionend',function(){
	document.querySelector('.home').style.display = 'block'
	document.querySelector('.foot').style.display = 'block'
})

timer = setInterval(function(){
	if((new Date().getTime()-startTime)>=2000){
		 animationEnd = true
	}
	if(animationEnd && imgAllloaded){
		onboarding.style.opacity = 0
		clearInterval(timer)
	}
},1000)


}
