const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Toggle Login/Register Form
registerLink.onclick = (e) => {
    e.preventDefault();
    wrapper.classList.add('active');
};

loginLink.onclick = (e) => {
    e.preventDefault();
    wrapper.classList.remove('active');
};

// Toggle Mobile Navbar
hamburger.onclick = () => {
    navLinks.classList.toggle('active');
};

// Close Navbar when a link is clicked (for mobile)
navLinks.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
        navLinks.classList.remove('active');
    }
});