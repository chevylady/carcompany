document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar')
	const navList = document.querySelector('.navbar-collapse')
	const allNavItems = document.querySelectorAll('.nav-link')
	const currentYear = document.querySelector('.currentYear')

	const handleYear = () => {
		const year = new Date();
		let yearFull = year.getFullYear();
		currentYear.innerHTML = yearFull
	}
	handleYear()

	function addShadow() {
		if (window.scrollY >= 100) {
			nav.classList.add('shadow-bg')
		} else {
			nav.classList.remove('shadow-bg')
		}
	}

	console.log(allNavItems)

	allNavItems.forEach(item => item.addEventListener('click', () => navList.classList.remove('show')))

	window.addEventListener('scroll', addShadow)
})
