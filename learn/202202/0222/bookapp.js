// 需要一个book对象
const Book = function(bname, bauthor, bisbn) {
	this.bname = bname
	this.bauthor = bauthor
	this.bisbn = bisbn
}
// 创建DOM对象:UI对象
const Ui = function() {

}
Ui.prototype.showAlert = function(msg) {
const div = document.createElement('div')
div.className = 'msg'
div.innerHTML = msg
const container = document.querySelector('.container')
const form = document.querySelector('#b-form')
container.insertBefore(div,form)
setTimeout(function(){
	container.querySelector('.msg').remove()
},3000)
}
Ui.prototype.addBook = function(book) {
	const tBody = document.querySelector('.b-list')
	const row = document.createElement('tr')
	row.innerHTML = `
		<td>${book.bname}</td>
		<td>${book.bauthor}</td>
		<td>${book.bisbn}</td>
		<td><a class='delete' href="#">删除</a></td>
	`
	tBody.appendChild(row)
}
Ui.prototype.deleteBook = function(ev) {
if(ev.target.className == 'delete'){
	ev.target.parentElement.parentElement.remove()
}
}

// submit事件
const bookFrom = document.querySelector('#b-form')
bookFrom.addEventListener('submit', function(ev) {
	ev.preventDefault()
	// 收集数据
	const bName = document.querySelector('#b-name').value
	const bAuthor = document.querySelector('#b-author').value
	const bISBN = document.querySelector('#b-isbn').value
	// 向DOM中添加数据(修改界面)UI()构造函数
	const book = new Book(bName, bAuthor, bISBN)
	const ui = new Ui()
	if(bName == '' || bAuthor == '' || bISBN == ''){
		ui.showAlert('不能为空') // 提示信息
	}else{
		ui.showAlert('已添加') // 提示信息
		ui.addBook(book) // 动态创建标签插入DOM
	}
	
	
})

// click事件
const bookList = document.querySelector('.b-list')
bookList.addEventListener('click', function(ev) {
	const ui = new Ui()
	ui.deleteBook(ev)
	ui.showAlert('书籍已删除')
})
