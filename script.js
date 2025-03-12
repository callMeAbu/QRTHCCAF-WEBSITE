const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');

    // Toggle icon between ☰ and ✖
    if (navLinks.classList.contains('active')) {
        hamburger.innerHTML = '✖';
    } else {
        hamburger.innerHTML = '☰';
    }
});