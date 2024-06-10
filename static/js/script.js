// window.addEventListener('load', function() {
//     const loading = document.getElementById('loading');
//     loading.style.display = 'none';
// });
window.addEventListener('load', function() {
    setTimeout(function() {
        const loading = document.getElementById('loading');
        loading.style.display = 'none';
    }, 3000); // delay in milliseconds
});


const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const body = document.querySelector('body');
const backdrop = document.createElement('div');
backdrop.classList.add('menu-backdrop');

body.appendChild(backdrop);

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    backdrop.classList.toggle('display'); // Show or hide the backdrop

    // Toggle body scrolling
    body.classList.toggle('fixed-position');
    
    // Burger Animation
    burger.classList.toggle('toggle');
});

backdrop.addEventListener('click', function() {
    navLinks.classList.remove('nav-active');
    this.classList.remove('display'); // Hide the backdrop when clicked
    body.classList.remove('fixed-position');
    burger.classList.remove('toggle');
});