const oUl = document.querySelector('#book-list ul')
const oBut = document.querySelectorAll('.delete')
		for(let i=0;i<oBut.length;i++){
			oBut[i].addEventListener('click',(e)=>{
				const oLi = e.target.parentElement
				oLi.parentElement.removeChild(oLi)
			})
		}

        const form2 = document.forms[1]
        form2.addEventListener('submit',(e)=>{
            e.preventDefault()
            const value = form2.querySelector('input').value
            const oLi = document.createElement('li')
            const span1 = document.createElement('span')
            const span2 = document.createElement('span')
            const oUl = document.querySelector('#book-list ul')

            span1.className = 'name'
            span1.innerHTML = value
            span2.className = 'delete'
            span2.innerHTML = 'delete'

            oLi.appendChild(span1)
            oLi.appendChild(span2)
            oUl.appendChild(oLi)
            form2.querySelector('input').value = ''

        })


const oInput = document.querySelector('#search-books input')
oInput.addEventListener('keyup',(e)=>{
    const txt = e.target.value
    const aLi =  oUl.querySelectorAll('li')
console.log(txt)
for(let i=0;i<aLi.length;i++){
    const bookTitle = aLi[i].firstElementChild.innerHTML
    if(bookTitle.indexOf(txt) != -1){
aLi[i].style.display = 'block'
    }else{
        aLi[i].style.display = 'none'
    }

}
    
})

        // function fn(){
        //     console.log(document.querySelector('#input1').value)
        // }
