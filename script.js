// ----------------------------
// :)

// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {

	// Get current scroll position
	let scrollY = window.pageYOffset;

	// Now we loop through sections to get height, top and ID values for each
	sections.forEach(current => {
		const sectionHeight = current.offsetHeight;
		const sectionTop = current.offsetTop - 50;
		sectionId = current.getAttribute("id");

		/*
		- If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
		- To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
		*/
		if (
			scrollY > sectionTop &&
			scrollY <= sectionTop + sectionHeight
		) {
			document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");
		} else {
			document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("active");
		}
	});
}
// ------------------------------



// scroll to top on reload
window.onbeforeunload = function() {
	window.scrollTo(0, 0);
}



// switch to dark/light theme
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
	console.log('dark');
	document.getElementById("body").classList.toggle("dark");
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
	console.log('dark');
	document.getElementById("body").classList.toggle("dark");
});



function setTheme() {
	// localStorage.clear();
	console.log('settheme called')
	var theme = localStorage.getItem('theme');
	console.log('theme gotten')
	console.log(theme)


	if (theme) {
		console.log('yes theme')
		if (theme == "dark-theme") {
			document.getElementById('body').classList.add('dark-theme');
			console.log('existing, set to dark-theme')
			document.getElementById("theme-button").innerText = "Change to light theme"
		}

		if (theme == "light-theme") {
			document.getElementById('body').classList.add('light-theme');
			console.log('existing, set to light-theme')
			document.getElementById("theme-button").innerText = "Change to dark theme"
		}
	} else {
		console.log('no theme')
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			document.getElementById('body').classList.add('dark-theme');
			console.log('new, set to dark-theme')
			document.getElementById("theme-button").innerText = "Change to light theme"
		} else {
			document.getElementById('body').classList.add('light-theme');
			localStorage.setItem('theme', 'light-theme');
			console.log('new, set to light-theme')
			document.getElementById("theme-button").innerText = "Change to dark theme"
		}
	}
}

setTheme();

function changeTheme() {
	if (document.getElementById('body').classList.contains('light-theme')) {
		document.getElementById('body').classList.remove('light-theme');
		document.getElementById('body').classList.add('dark-theme');
		localStorage.setItem('theme', 'dark-theme');
		console.log('user change, set to dark-theme')
		document.getElementById("theme-button").innerText = "Change to light theme"
	} else {
		document.getElementById('body').classList.remove('dark-theme');
		document.getElementById('body').classList.add('light-theme');
		localStorage.setItem('theme', 'light-theme');
		console.log('user change, set to light-theme')
		document.getElementById("theme-button").innerText = "Change to dark theme"
	}
}
