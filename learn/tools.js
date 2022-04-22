//获取元素
function e(selector){
				return document.querySelector(selector)
			}
//获取一组
function es(ele){
				return document.querySelectorAll(ele)
			}
//获取样式
function getsty(ele,attr){
	if(ele.currentStyle){
		return ele.currentStyle[attr]
	}else{
		return getComputedStyle(ele)[attr]
	}
}
//选项卡切换
function fn(ele,ele2){
	for(let i=0;i<ele.length;i++){
		ele[i].onclick = function(){
			for(let j=0;j<ele.length;j++){
				ele[j].classList.remove('active')
				ele2[j].classList.remove('active')
			}
			ele[i].classList.add('active')
			ele2[i].classList.add('active')
		}
	}
}
//上移
function up(btn){
				btn.onclick = function(){
					let first = this.parentElement.previousElementSibling,
						next = oUl.removeChild(this.parentElement)
					 oUl.insertBefore(next,first)
				}
			}
//下移
			function down(btn){
				btn.onclick = function(){
					let last = this.parentElement.nextElementSibling,
						next = this.parentElement
						if(last==null){
							// last = oUl.removeChild(this.parentElement)
							// next = oUl.firstElementChild
							oUl.insertBefore(oUl.removeChild(this.parentElement),oUl.firstElementChild)
						}else{
							oUl.insertBefore(oUl.removeChild(last),next)
						}
					 
				}
			}
//拖拽
function drag(ele){
			ele.onmousedown = function(e){
//拖动点到Div边界的距离 x=ev.clientx-div.offsetleft  y=ev.clienty -div.offsettop
				let ev = e || event
				let  x = ev.clientX-this.offsetLeft,
				  y = ev.clientY-this.offsetTop
			document.onmousemove = function(ev){
				ele.style.left = ev.clientX - x +'px'
				ele.style.top = ev.clientY - y +'px'
			}
			document.onmouseup = function(){
				document.onmousemove = null
			}
			return false
			}
			}