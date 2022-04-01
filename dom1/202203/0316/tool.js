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
