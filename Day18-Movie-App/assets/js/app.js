const API_URL =
	'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2788c4f620d5ab5353fcabecf7584c8b'

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280/'

const SEARCH_API =
	'https://api.themoviedb.org/3/search/movie?api_key=2788c4f620d5ab5353fcabecf7584c8b&query="'

const form = document.getElementById('form')
const searchInput = document.getElementById('search')
const main = document.getElementById('main')

//Get initial movies
getMovies(API_URL)

async function getMovies(url) {
	const res = await fetch(url)
	const data = await res.json()

	showMovies(data.results)
	console.log(data.results)
}

function showMovies(movies) {
	main.innerHTML = ''

	movies.forEach(function (movie) {
		const { title, poster_path, vote_average, overview } = movie

		const movieEL = document.createElement('div')
		movieEL.classList.add('movie')

		movieEL.innerHTML = ` 
        <img src="${IMG_PATH + poster_path}" alt="${title}">
                <div class="movie-info">
                    <h3>${title}</h3>
                    <span class="${getClassByRate(
											vote_average
										)}">${vote_average}</span>
                </div>
                <div class="overview">
                    <h3>Overview</h3>
                    <p>${overview}</p>
                </div>
           `

		main.appendChild(movieEL)
	})
}

function getClassByRate(vote) {
	if (vote >= 8) {
		return 'green'
	} else if (vote >= 5) {
		return 'orange'
	} else {
		return 'red'
	}
}

form.addEventListener('submit', function (event) {
	event.preventDefault()

	const searchTerm = searchInput.value

	if (searchTerm && searchTerm !== '') {
		getMovies(SEARCH_API + searchTerm)
		searchInput.value = ''
	} else {
		window.location.reload()
	}
})
