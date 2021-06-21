
// image slider code

const slider = document.querySelector(".slider")
const before = document.querySelector(".before")
const after = document.querySelector(".after")
const container = document.querySelector(".container")

const dragSlider = (e) => {
	let xPos = e.layerX;
	before.style.width = xPos + "px"

	if (xPos < 30) {
		before.style.width = 0
		document.querySelector(".alterEgo").style.display = "inline"
	}

	if (xPos > 270) {
		before.style.width = 300 + "px"
		document.querySelector(".alterEgo").style.display = "none"
	}

}

container.addEventListener('mousemove', dragSlider)



// parallax

// on paragraph

	window.addEventListener('scroll', function (e) {
	
		if(window.innerWidth > 850) {
		const target = document.querySelector('.scroll')
	
		let scrolled = window.pageYOffset
	
		let rate = scrolled * 0.3
	
		target.style.transform = `translate3d(0px, -${rate}px, 0px)`
		} else {
			const target = document.querySelector('.scroll')
			target.style.transform = `translate3d(0px, 0px, 0px)`
		}
	})


// on first circle
window.addEventListener('scroll', function (e) {

	const target = document.querySelector('.circleScroll')

	let scrolled = window.pageYOffset

	let rate = scrolled * .06

	target.style.transform = `translate3d( -${rate}px, 0px, 0px)`

})

// on second circle
window.addEventListener('scroll', function (e) {

	const target = document.querySelector('.circleScrollTwo')

	let scrolled = window.pageYOffset

	let rate = scrolled * .06

	target.style.transform = `translate3d( ${rate}px, 0px, 0px)`

})

// burger menu + nav
const menuButton = document.querySelector('.menuButton')
const menuBurger = document.querySelector('.menuBurger')
const nav = document.querySelector('.nav')

let menuOpen = false;

menuButton.addEventListener('click', () => {
	if (!menuOpen) {
		menuButton.classList.add('open')
		nav.style.transform = 'translateX(0px)'
		menuOpen = true
	} else {
		menuButton.classList.remove('open')
		nav.style.transform = 'translateX(500px)'
		menuOpen = false
	}
	
})