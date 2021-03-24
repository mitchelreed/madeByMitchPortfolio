
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

	const target = document.querySelector('.scroll')

	let scrolled = window.pageYOffset

	let rate = scrolled * 0.3

	target.style.transform = `translate3d(0px, -${rate}px, 0px)`

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

// contact form

  window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    let form = document.getElementById("myForm");
    let status = document.getElementById("status");

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      status.innerHTML = "I look forward to chatting with you (✿◠‿◠)";
      status.classList.add("success");
    }

    function error() {
      status.innerHTML = "Oops! There was a problem.";
      status.classList.add("error");
    }

    // handle the form submission event

    form.addEventListener("submit", function(e) {
      e.preventDefault();
      let data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }

// to dynamically change the burger menu over purple or orange
	const burger = document.querySelector(".menuBurger");
	const burgerBefore = document.querySelector(".menuBurgerBefore");
	const burgerAfter = document.querySelector(".menuBurgerAfter");
	const sectionOne = document.querySelector(".toolKit");
	const sectionOneOptions = {
		threshold: .6,
		rootMargin: "300px 0px 0px 0px"
	};
	
	const sectionOneObserver = new IntersectionObserver(function(
		entries,
		sectionOneObserver
	) {
		entries.forEach(entry => {
			console.log(entry.target)
			if (entry.isIntersecting) {
				burger.classList.add("burgerSwap");
				burgerBefore.classList.add("burgerSwap");
				burgerAfter.classList.add("burgerSwap");
			} else {
				burger.classList.remove("burgerSwap");
				burgerBefore.classList.remove("burgerSwap");
				burgerAfter.classList.remove("burgerSwap");
			}
		});
	}, sectionOneOptions);
	
	sectionOneObserver.observe(sectionOne);