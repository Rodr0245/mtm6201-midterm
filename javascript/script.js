document.addEventListener('DOMContentLoaded', () => { //makes sure my script runs after DOM has fully loaded
	const hamburger = document.querySelector('.hamburger'); 
	const navMenu = document.querySelector('.nav-menu'); 
	const navBar = document.querySelector('.navbar');
	const sparkLogo = document.querySelector('.spark-logo-nav')
	const navLink = document.querySelectorAll('.nav-link');

	hamburger.addEventListener("click", () => {
			hamburger.classList.toggle("active");
			navMenu.classList.toggle("active");
	});
	document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
		hamburger.classList.remove("active");
		navMenu.classList.remove("active");
	}))
	// Style changes for when the page is scrolled
	window.addEventListener("scroll", function() {
    var scrollPosition = window.scrollY;
    if (scrollPosition > 100) {
        navBar.style.backgroundColor = "white";
    } else {
        navBar.style.backgroundColor = "transparent";
    }
	});
	window.addEventListener("scroll", function() {
    var scrollPosition = window.scrollY;
    if (scrollPosition > 100) {
			sparkLogo.classList.add("active");
			hamburger.classList.add("activeScroll");
			navLink.forEach(navLink => {
				navLink.classList.add("active");
				navLink.classList.add("before")
			})
			
    } else {
        sparkLogo.classList.remove("active");
				hamburger.classList.remove("activeScroll");
				navLink.forEach(navLink => {
					navLink.classList.remove("active");
					navLink.classList.remove("before")
				})
    }
	});
	
});

