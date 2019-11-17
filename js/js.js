var loginModal = document.getElementById('modal_login');

function openLoginModal() {
	loginModal.style.display = "block";
}

function closeLoginModal() {
	loginModal.style.display = "none";
}

//-----------------------------------------------------

var buyModal = document.getElementById('modal_buy');

function openBuyModal() {
	buyModal.style.display = "block";
}

function closeBuyModal() {
	buyModal.style.display = "none";
}

//-----------------------------------------------------

function OpenDropdown() {
	document.getElementById("dropdown_menu").classList.add("showDropdown");
}


//-----------------------------------------------------

window.onclick = function(event) {
	if (!event.target.matches('.menu_btn')) {
		var dropdowns = document.getElementsByClassName("nav_1");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('showDropdown')) {
				openDropdown.classList.remove('showDropdown');
			}
		}
	}

	if (event.target == loginModal) {
		loginModal.style.display = "none";
	} else if (event.target == buyModal) {
		buyModal.style.display = "none";
	}
}

function autoCloseDropdown(x1) {
	if (x1.matches) {
		document.getElementById("dropdown_menu").classList.remove('showDropdown');
	}
}

var x1 = window.matchMedia("(min-width: 767px)")
x1.addListener(autoCloseDropdown)

//-----------------------------------------------------

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
		document.getElementById("header").classList.add('stickyHeader');
		document.getElementById("dropdown_menu").classList.add("ddFxdcntrl");
		document.getElementById("header_fxdcntrl").classList.add("headerFxdcntrl");
		document.getElementById("dropdown_menu").classList.remove('showDropdown');
		document.getElementById("header").style.top = "-130px";
		if (document.body.scrollTop > 160 || document.documentElement.scrollTop > 160) {
			document.getElementById("header").style.top = "0";
		}
	} else {
		document.getElementById("header").classList.remove('stickyHeader');
		document.getElementById("dropdown_menu").classList.remove("ddFxdcntrl");
		document.getElementById("header_fxdcntrl").classList.remove("headerFxdcntrl");
	}
}