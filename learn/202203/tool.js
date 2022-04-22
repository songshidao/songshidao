// 获取基于元素的坐标
let C = {};
C.getMousePos = function(ele) {
	let mouse = {
		x:0,
		y:0
	}
	ele.addEventListener('mousemove',function(ev) {
		let {pageX,
			pageY,
			target
		} = ev
		let {
			left,
			top
		} = target.getBoundingClientRect()
		mouse.x = pageX - left
		mouse.y = pageY - top
	})
	return mouse
}


class Arrow{
			constructor(props) {
			    this.x=0;
				this.y=0;
				this.w=60;
				this.h=30;
				this.rotation=0;
				this.fillStyle = 'red';
				this.strokeStyle = 'black'
				Object.assign(this,props)
				return this
			}
			createPath(ctx){
				let {w,h}=this
				ctx.beginPath()
				ctx.moveTo(-w/2,-h/4)
				ctx.lineTo(w/10,-h/4)
				ctx.lineTo(w/10,-h/2)
				ctx.lineTo(w/2,0)
				ctx.lineTo(w/10,h/2)
				ctx.lineTo(w/10,h/4)
				ctx.lineTo(-w/2,h/4)
				ctx.closePath()
				ctx.stroke()
				return this
			}
			render(ctx){
				let {fillStyle,rotation,strokeStyle,x,y}=this
				ctx.save()
				ctx.fillStyle = fillStyle
				ctx.strokeStyle = strokeStyle
				ctx.translate(x,y)
				ctx.rotate(rotation)
				this.createPath(ctx)
				ctx.stroke()
				ctx.fill()
				ctx.restore()
				return this
			}
		}

C.getBallLength=function(x1,y1,x2,y2){
	return Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2))
}