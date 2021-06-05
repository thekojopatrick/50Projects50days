const loadText = document.getElementById('load')
const bgImage = document.querySelector('.bg-image')

let load = 0

let int = setInterval(blurring, 30)

function blurring() {
	load++

	if (load > 99) {
		clearInterval(int)
	}

	loadText.innerText = `${load}%`
	loadText.style.opacity = scale(load, 0, 100, 1, 0)
	bgImage.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

function scale(number, inMin, inMax, outMin, outMax) {
	return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}
