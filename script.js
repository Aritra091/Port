const date = document.getElementById('date')
const setCurrentYear = () => {
	const currentYear = new Date().getFullYear()
	date.textContent = currentYear
}
setCurrentYear()

function typeWriterEffect(element, text, speed, callback) {
	let i = 0;
	function type() {
		if (i < text.length) {
			element.innerHTML += text.charAt(i);
			i++;
			setTimeout(type, speed);
		} else {
			element.style.borderRight = "none"; // Remove cursor after typing
			if (callback) callback();
		}
	}
	type();
}

document.addEventListener("DOMContentLoaded", function () {
	typeWriterEffect(document.querySelector(".name"), "Aritra Chattopadhyay", 100, function() {
		typeWriterEffect(document.querySelector(".intro"), "An Indian-based self-taught Frontend Developer who specializes in building exceptional digital experiences.", 50);
	});
});

// hamburger menu
const hamburger = document.querySelector('.hamburger')
const navList = document.querySelector('.nav-list')
const socials = document.querySelector('.social-nav')
const navLinks = document.querySelectorAll('.nav-links')

const toggleMobileMenu = () => {
	hamburger.classList.toggle('open')
	navList.classList.toggle('open')
	socials.classList.toggle('open')
	document.body.classList.toggle('open')
}

navLinks.forEach(link => link.addEventListener('click', toggleMobileMenu))
hamburger.addEventListener('click', toggleMobileMenu)

// initialize aos (library for scroll animation)
AOS.init()
