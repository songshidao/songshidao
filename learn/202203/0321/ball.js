class Ball{
			constructor(props){
				this.x=0
				this.y=0
				this.r=20
				this.fillStyle='red'
				this.strokeStyle = 'black'
				this.scaleX = 1
				this.scaleY = 1
				this.alpha = 1
				Object.assign(this,props)
			}
			render(ctx){
				let{x,y,r,scaleX,scaleY,alpha,fillStyle,strokeStyle}=this
				ctx.save()
				ctx.translate(x,y)
				ctx.scale(scaleX,scaleY)
				ctx.strokeStyle = strokeStyle
				ctx.fillStyle = fillStyle
				ctx.beginPath()
				ctx.arc(0,0,r,0,2*Math.PI,false)
				ctx.stroke()
				ctx.fill()
				ctx.restore()
				return this
			}
		}