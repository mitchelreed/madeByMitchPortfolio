// image slider code

const slider = document.querySelector(".slider")
const before = document.querySelector(".before")
const after = document.querySelector(".after")
const container = document.querySelector(".container")

const dragSlider = (e) => {
	let  xPos = e.layerX;
	before.style.width = xPos + "px"

	if(xPos < 30) {
		before.style.width = 0
		document.querySelector(".alterEgo").style.display = "inline"
	}

	if(xPos > 270){
		before.style.width = 300 + "px"
		document.querySelector(".alterEgo").style.display = "none"
	}

}

container.addEventListener('mousemove', dragSlider)

// image slider code end


// parallax paragraph

window.addEventListener('scroll', function(e) {

	const target = document.querySelector('.scroll')

	let scrolled = window.pageYOffset

	let rate = scrolled * 0.3

	target.style.transform = `translate3d(0px, -${rate}px, 0px)`

})
