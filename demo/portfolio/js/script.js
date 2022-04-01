const navbar = document.querySelector('.navbar')
window.onscroll = function(){
	this.scrollY>20?navbar.classList.add('sticky'):navbar.classList.remove('sticky')
}
const blocks = document.querySelectorAll('.bar')
const blocksParent = document.querySelector('.about-content .section-content')
window.addEventListener('scroll',function(){
	if(!checkScroll(blocksParent)) return
		blocks.forEach( block => {
		    block.style.width = block.dataset.progress
		})
	
   
})
function checkScroll(ele){
	let rect = ele.getBoundingClientRect()//查询视口坐标
	if(rect.top+ele.offsetHeight<=window.innerHeight){
		return true
	}
	return false
}
// 获取按钮
const btnParent = document.querySelector('.portfolio-filter')
const btns = btnParent.querySelectorAll('button')
// 获取项目
const itemParent = document.querySelector('#portfolio')
const items = itemParent.querySelectorAll('.portfolio-item')
for(let i=0;i<btns.length;i++){
	btns[i].addEventListener('click',function(){
		// 清除active
		btnParent.querySelector('.active').classList.remove('active')
		// 添加active
		this.classList.add('active')
		// 切换项目的类别
		// 当前八张项目的hide属性删除 把八张以外的项目添加到hide
		for(let j=0;j<items.length;j++){
			if(this.getAttribute('data-filter')==items[j].getAttribute('data-category')){
				items[j].classList.remove('hide')
				// items[j].classList.add('hide')
			}else{
				items[j].classList.add('hide')
			}
		}
		
	})
}
// 获取元素
const aArr = document.querySelectorAll('.nav-link')
const sectionArr = document.querySelectorAll('section[id]')

window.addEventListener('scroll',autoActive)
function autoActive(){
	sectionArr.forEach(section =>{
		let sectionId = section.getAttribute('id')
		if(window.pageYOffset>section.offsetTop-60&&section.offsetTop-60+section.offsetHeight>=window.pageYOffset){
			document.querySelector(`.menu a[href='#${sectionId}']`).classList.add('active')
		}else{
			document.querySelector(`.menu a[href='#${sectionId}']`).classList.remove('active')
		}	
	})
}
// 轮播图
const slider = document.querySelector('.slider')
const sliderImg = slider.querySelector('.silder-content img')
const sliderTitle = slider.querySelector('.slider-title')
const sliderSn =  slider.querySelector('.slider-sn')
let imgSrc=0,
itemIndex = 0
for(let i=0;i<items.length;i++){
	items[i].addEventListener('click',function(){
		itemIndex=i
		changItem()
		slider.classList.toggle('active')
	})
}
function changItem(){
	imgSrc=items[itemIndex].querySelector('img').src
	sliderImg.src=imgSrc
	sliderTitle.innerHTML=items[itemIndex].querySelector('h4').innerHTML
}
function prevItem(){
	if(itemIndex==0){
		itemIndex=items.length-1
	}else{
		itemIndex--
	}
	changItem()
}
function nextItem(){
	if(itemIndex==items.length-1){
		itemIndex=0
	}else{
		itemIndex++
	}
	changItem()
}
const menu = document.querySelector('.menu')
const hb_btn = document.querySelector('.menu-btn')

hb_btn.addEventListener('click',function(){
	menu.classList.toggle('active1')
})
const linkArr= document.querySelectorAll('.nav-link')
linkArr.forEach(link => {
	link.addEventListener('click',function(){
		menu.classList.toggle('active1')
	})
})