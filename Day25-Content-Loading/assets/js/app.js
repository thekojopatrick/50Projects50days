const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const nam = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
	header.innerHTML = `<img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                    alt="Girl on the wall" />`

	title.innerHTML = 'Lorem ipsum dolor sit amet'

	excerpt.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis`
	profile_img.innerHTML = `<img src="https://images.unsplash.com/photo-1624455061433-95500b729733?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80"
                            alt="Girl on the wall" />`
	nam.innerHTML = 'Mary Doe'
	date.innerHTML = 'Oct 08, 2020'

	animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
	animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}
