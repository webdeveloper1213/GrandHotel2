const menu = document.querySelector('.menu-icon');

const navbar = document.querySelector('.navbar');
menu.addEventListener('click' , () => {
    navbar.classList.toggle('change')
})