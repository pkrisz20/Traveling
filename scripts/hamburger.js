const menuicon = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

menuicon.addEventListener('click', () => {
    navbar.classList.toggle('change');
    menuicon.classList.toggle('open-menu');
})