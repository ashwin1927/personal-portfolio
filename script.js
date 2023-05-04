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
			document.getElementById('theme-icon').setAttribute('name','sunny-outline');
		}
	
		if (theme == "light-theme") {
			document.getElementById('body').classList.add('light-theme');
			console.log('existing, set to light-theme')
			document.getElementById('theme-icon').setAttribute('name','moon-outline');
		} 
	} else {
		console.log('no theme')
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			document.getElementById('body').classList.add('dark-theme');
			console.log('new, set to dark-theme')
			document.getElementById('theme-icon').setAttribute('name','sunny-outline');
		} else {
			document.getElementById('body').classList.add('light-theme');
			localStorage.setItem('theme', 'light-theme');
			console.log('new, set to light-theme')
			document.getElementById('theme-icon').setAttribute('name','moon-outline');
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
		document.getElementById('theme-icon').setAttribute('name','sunny-outline');
	} else {
		document.getElementById('body').classList.remove('dark-theme');
		document.getElementById('body').classList.add('light-theme');
		localStorage.setItem('theme', 'light-theme');
		console.log('user change, set to light-theme')
		document.getElementById('theme-icon').setAttribute('name','moon-outline');
	}	
}



