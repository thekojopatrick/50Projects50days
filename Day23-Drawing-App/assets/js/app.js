const canvas = document.getElementById('canvas')
const clearBtn = document.getElementById('clear')
const ctx = canvas.getContext('2d')

let isPressed = false
let size = 20
let color = 'black'
let x, y

clearBtn.addEventListener('click', function () {
	x = 0
	y = 0
})

canvas.addEventListener('mousedown', function (e) {
	isPressed = true
	x = e.offsetX
	y = e.offsetY

	console.log(isPressed)
})

canvas.addEventListener('mouseup', function (e) {
	isPressed = false
	x = undefined
	y = undefined

	console.log(isPressed)
})

canvas.addEventListener('mousemove', function (e) {
	if (isPressed) {
		const x2 = e.offsetX
		const y2 = e.offsetY
		drawCircle(x2, y2)
		drawLine(x, y, x2, y2)

		x = x2
		y = y2
	}
})

function drawCircle(x, y) {
	ctx.beginPath()
	ctx.arc(x, y, size, 0, Math.PI * 2)
	ctx.fillStyle = color
	ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
	ctx.beginPath()
	ctx.moveTo(x1, y1)
	ctx.lineTo(x2, y2)
	ctx.strokeStyle = color
	ctx.lineWidth = size * 2
	ctx.stroke()
}
