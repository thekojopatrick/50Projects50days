const jokeEL = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')
const apiUrl = 'https://icanhazdadjoke.com'

jokeBtn.addEventListener('click', function () {
	generateJoke()
})

/**USING .AWAIT */
async function generateJoke() {
	const config = {
		headers: {
			Accept: 'application/json',
		},
	}

	const res = await fetch(apiUrl, config)

	const data = await res.json()
	jokeEL.innerHTML = data.joke

	console.log(data)
}


/**USING .THEN */

// function generateJoke() {
// 	const config = {
// 		headers: {
// 			Accept: 'application/json',
// 		},
// 	}
// 	fetch(apiUrl, config)
// 		.then(res => res.json())
// 		.then(data => {
// 			jokeEL.innerHTML = data.joke
// 			console.log(data)
// 		})
// }
