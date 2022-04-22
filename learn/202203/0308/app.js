(function(){
	const navContainer = document.querySelector('#nav')
	const navList = document.querySelector('.navList')
	let ratio = navContainer.clientHeight / navList.offsetHeight
	navList.style.transform = `scale(${ratio})`
})()

;(function(){
	const navList = document.querySelector('.navList')
	const navLi = navList.querySelectorAll('li')
	const bodyf = document.querySelector('.list')
	
	navList.addEventListener('touchstart',function(ev){
		// 找到和data-index一样的左侧dt
		let weizhi = bodyf.querySelector(`dt[data-id=${ev.target.dataset.index}]`)
		for(let i=1;i<navLi.length;i++){
			navLi[i].classList.remove('focus')
		}
		// console.log(weizhi.offsetTop)
		ev.target.classList.add('focus')
		// 文档位置
		if(weizhi){
			window.scrollTo(0,`${weizhi.offsetTop}`)
		}
		console.log(ev.target.dataset.index)
		
		
	})
	navList.addEventListener('touchmove',function(ev){
		
	})
	navList.addEventListener('touchend',function(ev){
		
	})
})()