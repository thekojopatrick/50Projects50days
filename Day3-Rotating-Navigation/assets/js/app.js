const openBtn = document.getElementById('open')
const closeBtn = document.getElementById('close')
const container = document.querySelector('.container')

openBtn.addEventListener('click', function () {
	container.classList.add('show-nav')
	//openBtn.style.transform = 'rotate(90deg)'
	//closeBtn.style.transform = 'rotate(0deg)'
})

closeBtn.addEventListener('click', function () {
	container.classList.remove('show-nav')
	//openBtn.style.transform = 'rotate(0deg)'
	//closeBtn.style.transform = 'rotate(90deg)'
})
