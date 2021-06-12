const faqs = document.querySelectorAll('.faq')
const btns = document.querySelectorAll('.faq-toggle')

removeActive()

// faqs.forEach(function (faq) {

//     faq.addEventListener('click', function (item) {
//         removeActive()
//         faq.classList.toggle('active')
//     })
// })

btns.forEach(function (btn) {
	btn.addEventListener('click', function (event) {
		btn.parentNode.classList.toggle('active')
		//removeActive()
		console.log(btn.parentNode)
	})
})

function removeActive() {
	faqs.forEach(function (faq) {
		faq.classList.remove('active')
	})
}
