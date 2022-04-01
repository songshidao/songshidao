//获取元素
let oContainer = document.querySelector('#slider')
let oBtnL = oContainer.querySelector('.btn-l')
let oBtnR = oContainer.querySelector('.btn-r')
let oImg = document.querySelector('#slider img')
let oTitle = oContainer.querySelector('.title')
let aSquare = oContainer.querySelectorAll('.squares li')
let on = true
let aTitle = ['[NBA]勇士104-89骑士 库里9三分砍40分','国足全体抵达苏州 开始进行集中隔离','为中国足球奋斗！武磊30岁生日快乐！','足协宣布水庆霞担任中国女足主教练','张家齐与姆巴佩联动 为旅法大熊猫幼崽命名',]
let aImgUrl = ['images/slider1.jpg','images/slider2.jpg','images/slider3.jpg','images/slider4.jpg','images/slider5.jpg']
let len = aTitle.length
let n = 0
let last = 0

//初始化：1.图片2.标题3.序号
function mySlider(num){
	oImg.src = aImgUrl[num]
	oTitle.innerHTML = aTitle[num]
	oBtnL.innerHTML = oBtnR.innerHTML = (num+1) +"/"+len
	aSquare[last].className = ''
	aSquare[num].className = 'active'
	last = num
}
mySlider(n)

//点击按钮左
oBtnL.onclick = function(){ 
	--n
	if(n == -1){ n = 4}
	mySlider(n)
}
//点击按钮右
oBtnR.onclick = function(){
	++n
	if(n == len){ n = 0}
	mySlider(n)
}
//鼠标悬停
for(var i=0;i<len;i++){
	aSquare[i].index = i
	aSquare[i].onmouseover = function(){
		mySlider(this.index)
	}
}

