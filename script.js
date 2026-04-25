// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li a');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = hamburger.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when a link is clicked
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = hamburger.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Active link highlighting on scroll
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').substring(1) === current) {
            item.classList.add('active');
        }
    });
});

// Typewriter effect for Hero
const typewriterText = "BCA AI & ML Student | Developer | Designer";
const typewriterElement = document.querySelector('.typewriter');
let i = 0;

function typeWriter() {
    if (i === 0) {
        typewriterElement.innerHTML = '';
    }
    if (i < typewriterText.length) {
        typewriterElement.innerHTML += typewriterText.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

// Start typewriter effect after a short delay
setTimeout(typeWriter, 1000);

// Modal Logic
const modal = document.getElementById('certModal');
const certBtn = document.getElementById('viewCertsBtn');
const closeBtn = document.querySelector('.close-modal');

if (certBtn) {
    certBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });
}

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Form Submission Logic
let formSubmitted = false;
const contactForm = document.getElementById('contactForm');
const hiddenIframe = document.getElementById('hidden_iframe');
const successModal = document.getElementById('formSuccessModal');
const closeSuccessModal = document.querySelector('.form-close-modal');
const closeSuccessBtn = document.querySelector('.form-close-btn');

if (contactForm) {
    contactForm.addEventListener('submit', () => {
        formSubmitted = true;
    });
}

if (hiddenIframe) {
    hiddenIframe.addEventListener('load', () => {
        if (formSubmitted) {
            successModal.style.display = 'block';
            contactForm.reset();
            formSubmitted = false;
        }
    });
}

function closeSuccessMsg() {
    if(successModal) successModal.style.display = 'none';
}

if (closeSuccessModal) closeSuccessModal.addEventListener('click', closeSuccessMsg);
if (closeSuccessBtn) closeSuccessBtn.addEventListener('click', closeSuccessMsg);

window.addEventListener('click', (e) => {
    if (e.target === successModal) {
        successModal.style.display = 'none';
    }
});
