const API_URL = 'https://api.github.com/users/'

const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')
//const repos = document.querySelectorAll('#repos')

async function getUser(username) {
	// axios(API_URL + username)
	// 	.then(res => console.log(res))
	// 	.catch(err => console.log(err))

	//const res = await axios(API_URL + username)

	try {
		//desturting
		const { data } = await axios(API_URL + username)
		createUserCard(data)
		getRepos(username)
		console.log(data)
	} catch (error) {
		if (error.response.status == 404) {
			createErrorCard(`No profile with this username`)
		}
		console.log(error)
	}
}

async function getRepos(username) {
	try {
		//desturting
		const { data } = await axios(API_URL + username + '/repos?sort=created')
		addReposToCard(data)
	} catch (error) {
		if (error) {
			createErrorCard(`Problem fetching repos`)
		}
		console.log(error)
	}
}

//getUser('thekojopatrick')

function createUserCard(user) {
	const cardEl = document.createElement('div')

	cardEl.classList.add('card')

	cardEl.innerHTML = `
                <div >
                    <img class="avatar" src='${user.avatar_url}' alt="avatar" />
                </div>
                <div class="user-info">
                    <h2>${user.name}</h2>
                    <p>${user.bio}</p>
                    <ul>
                        <li>${user.followers}<strong>Followers</strong></li>
                        <li>${user.following}<strong>Following</strong></li>
                        <li>${user.public_repos}<strong>Repos</strong></li>
                    </ul>
                <div id='repos'></div>
                 
                </div>
           `

	main.appendChild(cardEl)
}

function createErrorCard(message) {
	const cardHTML = `
    <div class='card'>
       <h1> ${message} </h1>
    </div>
    `

	main.innerHTML = cardHTML
}

function addReposToCard(repos) {
	const reposEl = document.getElementById('repos')

	repos.slice(0, 5).forEach(repo => {
		const repoEl = document.createElement('a')
		repoEl.classList.add('repo')
		repoEl.href = repo.html_url
		repoEl.target = '_blank'
		repoEl.innerText = repo.name

		reposEl.appendChild(repoEl)
	})
}

form.addEventListener('submit', e => {
	e.preventDefault()

	const user = search.value

	if (user) {
		getUser(user)

		search.value = ''
	}
})
