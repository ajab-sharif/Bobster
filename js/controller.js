//////// navigation ///////////
const navMobile = document.querySelector('.nav__mobile');
const navLinks = document.querySelector(".nav__links");
const nav = document.querySelector('.nav');
navMobile.addEventListener('click', () => {
    navLinks.classList.toggle('nav__links--open');
    nav.classList.toggle("nav__grow--height");
    navMobile.classList.toggle("nav__mobile--border");

})