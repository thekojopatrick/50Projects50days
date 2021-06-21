const buttons = document.querySelectorAll('.ripple')

buttons.forEach(function (button) {
	button.addEventListener('click', function (event) {
		//where the user clicks in the button
		const x = event.clientX
		const y = event.clientY

		//the position of the button in the viewport
		const buttonTop = event.target.offsetTop
		const buttonLeft = event.target.offsetLeft

		//the position of the user click inside the button
		const xInside = x - buttonLeft
		const yInside = y - buttonTop

		const circle = document.createElement('span')

		circle.classList.add('circle')
		circle.style.top = `${yInside}px`
		circle.style.left = `${xInside}px`

		this.appendChild(circle)

		setTimeout(() => {
			circle.remove()
		}, 500)
	})
})
