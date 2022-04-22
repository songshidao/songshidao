class Box{
			constructor(props){
				this.x=0
				this.y=0
				this.w=100
				this.h=100
				this.fillStyle='red'
				this.strokeStyle = 'black'
				this.scaleX = 1
				this.scaleY = 1
				this.alpha = 1
				Object.assign(this,props)
			}
			render(ctx){
				let{x,y,w,h,scaleX,scaleY,alpha,fillStyle,strokeStyle}=this
				ctx.save()
				ctx.translate(x,y)
				ctx.scale(scaleX,scaleY)
				ctx.strokeStyle = strokeStyle
				ctx.fillStyle = fillStyle
				ctx.beginPath()
				ctx.lineTo(0,0)
				ctx.lineTo(w,0)
				ctx.lineTo(w,h)
				ctx.lineTo(0,h)
				ctx.closePath()
				ctx.stroke()
				ctx.fill()
				ctx.restore()
				return this
			}
			isInBox(mouse){
				return mouse.x>=this.x&&mouse.x<=this.x+this.w&&mouse.y>=this.y&&mouse.y<=this.y+this.h
			}
		}