const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', function () {
	currentActive++
	//console.log(currentActive)

	if (currentActive > circles.length) {
		currentActive = circles.length
	}
	updateProgress()
})

prev.addEventListener('click', function () {
	currentActive--
	//console.log(currentActive)

	if (currentActive < 1) {
		currentActive = 1
	}
	updateProgress()
})

function updateProgress() {
	circles.forEach(function (circle, index) {
		//console.log(index)
		if (index < currentActive) {
			circle.classList.add('active')
		} else {
			circle.classList.remove('active')
		}
	})

	const actives = document.querySelectorAll('.active')
	let progressPercent = ((actives.length - 1) / (circles.length - 1)) * 100
	progress.style.width = `${progressPercent}%`

	if (currentActive === 1) {
		prev.disabled = true
	} else if (currentActive === circles.length) {
		next.disabled = true
	} else {
		prev.disabled = false
		next.disabled = false
	}
}
