fnHome()
function fnHome(){
	const sliderWin = document.querySelector('#silder')
	const sliderBox = sliderWin.querySelector('.slider-box')
	const imgW = sliderWin.offsetWidth
	const dots = sliderWin.querySelectorAll('span')
	console.log(dots[0])
	let n1 = 0,
		n2 = 0,
		x = 0,
		sliderBoxX = 0,
		len = 0 ;
	mySlider()
	
	function mySlider() {
		let timer = null
		// sliderBox.innerHTML+=sliderBox.innerHTML
		// len = sliderBox.children.length
		// sliderBox.style.width = len*imgW +'px'
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
}

// preLoading()
// function preLoading(){
// 	// 获取元素
// 	const onboarding = document.querySelector('.onboarding')
// 	const images = document.querySelectorAll('img')
// 	const arrUrl = []
// 	for(i=0;i<images.length;i++){
// 		arrUrl.push(images[i].src)
// 	}
// let imgAllloaded = false
// let animationEnd = false
// let startTime = new Date().getTime()
// let timer = null
// let num = 0

// for(let i=0;i<arrUrl.length;i++){
// 	let oImage =new Image()
// 	oImage.src = arrUrl[i]
// 	oImage.onload = function(){
// 		num++
// 		if(num == arrUrl.length){
// 			console.log('图片已全加载')
// 			imgAllloaded = true
// 		}
// 	}
// }

// onboarding.addEventListener('transitionend',function(){
// 	document.querySelector('.home').style.display = 'block'
// 	document.querySelector('.foot').style.display = 'block'
// 	fnHome()
// })

// timer = setInterval(function(){
// 	if((new Date().getTime()-startTime)>=2000){
// 		 animationEnd = true
// 	}
// 	if(animationEnd && imgAllloaded){
// 		onboarding.style.opacity = 0
// 		clearInterval(timer)
// 	}
// },1000)


// }

// 懒加载
// api:https://api.unsplash.com/
// photos:获取图片的接口
// page=1:页码:1
// per_page=10:每页十张图
// client_id :id

// let api = `https://api.unsplash.com/photos?page=1&per_page=10&client_id=Ow8pp_gzli3u4moNBcwPy_SjRgCEUuh0ELSWJV5ioaY`

// getData() 获取数据,只获取
// showData() 显示数据 把数据显示在DOM中
// loadData() 加载更多数据

lazyLoad()
function lazyLoad(){
	const oProducts = document.querySelector('.procucts')
	const oLoader = document.querySelector('.loader')
	
	const getData = async function(page,per_page){
		let api = `https://api.unsplash.com/photos?page=${page}&per_page=${per_page}&client_id=Ow8pp_gzli3u4moNBcwPy_SjRgCEUuh0ELSWJV5ioaY`
		
		const response = await fetch(api)
		if(!response.ok){
			console.log(`错误:${response.status}`)
		}
		return await response.json()
	}
	
	const showData = function(data){
		
		// data.then(data=>{
			data.forEach(item=>{
				const oDiv = document.createElement('div')
				oDiv.className='procuct'
				oDiv.innerHTML = `
				<img src="${item.urls.thumb}" alt="">
				<p>${item.user.username}</p>
				<p>${item.user.updated_at}</p>`
				oProducts.appendChild(oDiv)
			})
			console.log(data)
		// }
		// )
	}
	let total = 0,
	currentPage = 1,
	per_page = 10
	
	const  isLoading = function(page,per_page,total){
		return total == 0 ||page*per_page<total
	}
	
	const loadData = async function(page,per_page,total){
		oLoader.classList.add('show')
		if(isLoading(page,per_page,total)){
			const response = await getData(page,per_page,total)
			showData(response)
			total=60
		}else{
			oLoader.classList.remove('show')
		}
	}
	// document.body.addEventListener('scroll',()=>{
	// 	if(){
	// 		currentPage++
	// 		loadData(currentPage,per_page,total)
	// 	}
		
	// })
	
	
	document.body.addEventListener('scroll',()=>{
			// scrollTop + clientHeight >=scrollHeight
			const scrollTop = document.body.scrollTop
			const clientHeight = document.body.clientHeight
			const scrollHeight = document.body.scrollHeight
			if(scrollTop + clientHeight >=scrollHeight){
				currentPage++
				loadData(currentPage,per_page,total)//第一次滚动 currentPage = 2 
			} else{
				oLoader.classList.remove('show')
			}
		})
	
	
	// 初始化
	loadData(currentPage,per_page,total)//currentPage = 1
	
}
