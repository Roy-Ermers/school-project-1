function downloadFile(location) {
	window.location = location;
}
function showMenu() {
	var navbar = document.querySelector("nav>div");
	navbar.classList.toggle("show");
}
function hideMenu() {
	var navbar = document.querySelector("nav>div");
	navbar.classList.toggle("show");
}
/**
 * toggles the submenus in 
 * @param {Element} element 
 */
function toggleSubMenu(element) {
	console.log(element);
	element.classList.toggle("show");
}