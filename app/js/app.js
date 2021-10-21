const hamburger = document.querySelector('.hamburger_menu');
const closeMenu = document.querySelector('.close_menu');
const overlay = document.querySelector('header');
const blurred = document.querySelector('.blur');


hamburger.addEventListener('click', (e) => {
    e.preventDefault();
    overlay.classList.add('open');
})
closeMenu.addEventListener('click', (e) => {
    e.preventDefault();
    overlay.classList.remove('open');
})
blurred.addEventListener('click', (e) => {
    if(e.target.parentElement.classList.contains('open')) {
        overlay.classList.remove('open');
    }
})

