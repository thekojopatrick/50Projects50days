const searchBtn = document.getElementById('searchBtn')
const searchInput = document.querySelector('.search-input')
const searchBox = document.querySelector('.search-container')

searchBtn.addEventListener('click', function () {
	searchBox.classList.toggle('active')
	searchInput.focus()
})
