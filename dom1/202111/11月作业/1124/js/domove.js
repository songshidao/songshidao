function domove(obj,attr,target,step,speed,callback){
	step = parseInt(getComputedStyle(obj)[attr]) < target ? step : -step
					clearInterval(obj.timer)
					obj.timer = setInterval(function(){
						let oLeft = parseInt(getComputedStyle(obj)[attr])//.换成[]
						if(oLeft == target){
							clearInterval(obj.timer)
						}
						// oLeft--
						obj.style[attr] = oLeft + step + 'px'
						if(oLeft == target){
							clearInterval(obj.timer)
							callback&& callback()
						}
					},speed)
				}
				//obj是VAR,attr是left这些,target目标量,step位移变量,speed是时间间隔,callback是返回