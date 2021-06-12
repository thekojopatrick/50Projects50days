const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', function (event) {
	createTags(event.target.value)

	if (event.key === 'Enter') {
		setTimeout(() => {
			event.target.value = ' '
		}, 10)
		randomSelect()
	}
})

function createTags(input) {
	const tags = input
		.split(',')
		.filter(function (tag) {
			return tag.trim() !== ''
		})
		.map(function (tag) {
			return tag.trim()
		})

	tagsEl.innerHTML = ' '
	tags.forEach(function (tag) {
		const tagEl = document.createElement('span')
		tagEl.classList.add('tag')
		tagEl.innerText = tag

		tagsEl.appendChild(tagEl)
	})
	console.log(tags)
}

function randomSelect() {
	const times = 30
	const interval = setInterval(() => {
		const randomTag = pickRandomTag()
		highlightTag(randomTag)
		setTimeout(() => {
			unHighlightTag(randomTag)
		}, 100)
	}, 100)

	setTimeout(() => {
		clearInterval(interval)

		setTimeout(() => {
			const randomTag = pickRandomTag()
			highlightTag(randomTag)
		}, 100)
	}, times * 100)
}

function pickRandomTag() {
	const tags = document.querySelectorAll('.tag')
	return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
	tag.classList.add('highlight')
}

function unHighlightTag(tag) {
	tag.classList.remove('highlight')
}
