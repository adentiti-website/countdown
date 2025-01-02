// Form Validation
document.querySelector('form').addEventListener('submit', function (e) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!name || !email) {
        alert('Please fill in all required fields.');
        e.preventDefault();
    }
});


// Dynamic Animations
document.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('section');
    elements.forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
            el.classList.add('visible');
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    console.log("Welcome to ADENTITI Limited!");
});
const toggle = document.getElementById('dark-mode-toggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggle.textContent =
        document.body.classList.contains('dark-mode') ? "☀️" : "🌙";
});
