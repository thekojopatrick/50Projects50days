const nav = document.querySelector('.nav')

window.addEventListener('scroll', fixNav)

//option 1
function stickyNav() {
    var sticky = nav.offsetTop
    //console.log(sticky)
    if (window.pageYOffset >= sticky + 210) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}

//option 2

function fixNav() {
    if (window.scrollY > nav.offsetHeight + 150) {
        console.log(window.scrollY)
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}