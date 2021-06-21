const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activeSlide = 0

autoPlaySlides()

rightBtn.addEventListener('click', function () {
	activeSlide++

	if (activeSlide > slides.length - 1) {
		activeSlide = 0
	}
	setBgToBody()
	setActiveSlide()
})

leftBtn.addEventListener('click', function () {
	activeSlide--

	if (activeSlide < 0) {
		activeSlide = slides.length - 1
	}

	setBgToBody()
	setActiveSlide()
})

setBgToBody()

function setBgToBody() {
	body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
	slides.forEach(function (slide) {
		slide.classList.remove('active')
	})

	slides[activeSlide].classList.add('active')
}

function autoPlaySlides() {
	setInterval(() => {
		slides.forEach(function (slide) {
			slide.classList.remove('active')
		})
		activeSlide++

		if (activeSlide > slides.length - 1) {
			activeSlide = 0
		}

		slides[activeSlide].classList.add('active')
		setBgToBody()
	}, 2000)
}
