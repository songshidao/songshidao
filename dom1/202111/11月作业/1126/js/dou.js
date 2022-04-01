				function dou(obj,attr){
					let Arr = [20, -20, 18, -18, 16, -16, 14, -14, 12, -12, 10, -10, 8, -8, 6, -6, 4, -4, 2, -2, 0, -0],
				finished = false,
					 timer = null,
					 p = parseInt(getComputedStyle(obj)[attr]),
						n = 0
						clearInterval(timer)
					if(!finished){
						obj.style[attr] = p + Arr[n] +'px'
						finished = true
					}else{
						return
					}
					timer = setInterval(function(){
						obj.style[attr] = p + Arr[n] +'px'
						n++
						if(n === Arr.length){
							clearInterval(timer)
							n =0
							finished = false
						}
					},50)
				}