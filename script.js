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

// Initialize Live Animations
document.addEventListener('DOMContentLoaded', () => {
    // 1. Add AOS animation attributes dynamically
    document.querySelectorAll('.skill-card, .project-card, .service-card, .about-content, .contact-content').forEach((el, index) => {
        el.setAttribute('data-aos', 'fade-up');
        el.setAttribute('data-aos-delay', (index % 3) * 100);
    });

    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: false,
            mirror: true
        });
    }

    // 2. Initialize Vanta 3D Background Animation
    if (typeof VANTA !== 'undefined') {
        VANTA.NET({
            el: "#vanta-bg",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x990000,
            backgroundColor: 0x000000,
            points: 15.00,
            maxDistance: 25.00,
            spacing: 20.00,
            showDots: true
        });
    }
});

// Custom Trailing Cursor Animation
const cursor = document.createElement('div');
cursor.classList.add('cursor-follower');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

// Initialize 3D Tilt Effect for contents
document.addEventListener('DOMContentLoaded', () => {
    if (typeof VanillaTilt !== 'undefined') {
        // High tilt for smaller cards
        VanillaTilt.init(document.querySelectorAll(".skill-card, .project-card, .service-card"), {
            max: 15,
            speed: 400,
            glare: true,
            "max-glare": 0.2,
            scale: 1.05
        });

        // Subtle tilt for larger containers and the hero image
        VanillaTilt.init(document.querySelectorAll(".about-content, .contact-content, .hero-image-container"), {
            max: 5,
            speed: 400,
            glare: true,
            "max-glare": 0.1,
            scale: 1.02
        });
    }
});
