/**
 * Animation de Frappe (Typing Effect)
 * Rend la section d'accueil plus dynamique.
 */

document.addEventListener('DOMContentLoaded', function() {
    const roleSpan = document.querySelector('.home-content h3 span');
    const roles = ["Front-end Developer", "UX Designer", "Problem Solver"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 150;

    function type() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            // Efface les caractères
            charIndex--;
            roleSpan.textContent = currentRole.substring(0, charIndex);
        } else {
            // Ajoute les caractères
            charIndex++;
            roleSpan.textContent = currentRole.substring(0, charIndex);
        }

        let delay = typingSpeed;

        if (!isDeleting && charIndex === currentRole.length) {
            // Fin de la frappe, attend 1.5s puis commence à effacer
            delay = 1500;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            // Fin de l'effacement, passe au rôle suivant
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            delay = 500;
        }

        setTimeout(type, delay);
    }

    // Démarre l'effet après un petit délai
    setTimeout(type, 1000);
});

// ===================================
// 1. THEME TOGGLE LOGIC
// ===================================

const themeIcon = document.querySelector('#theme-icon');
const body = document.body;
// Get saved theme preference ('light' or 'dark')
const userTheme = localStorage.getItem('theme'); 

// Initial Load: Apply saved theme from localStorage or default to dark
// If the saved theme is 'light', apply the light theme class and switch the icon.
if (userTheme === 'light') {
    body.classList.add('light-theme');
    if (themeIcon) { // Check if the themeIcon element exists
        themeIcon.classList.remove('bx-moon');
        themeIcon.classList.add('bx-sun');
    }
}

// Toggle Functionality on Click
if (themeIcon) { // Ensure the icon exists before adding the listener
    themeIcon.onclick = () => {
        // Check if the current theme is dark (absence of 'light-theme' class)
        if (!body.classList.contains('light-theme')) {
            // Switch to Light Theme
            body.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
            // Change icon to Sun
            themeIcon.classList.remove('bx-moon');
            themeIcon.classList.add('bx-sun');
        } else {
            // Switch to Dark Theme
            body.classList.remove('light-theme');
            localStorage.setItem('theme', 'dark');
            // Change icon back to Moon
            themeIcon.classList.remove('bx-sun');
            themeIcon.classList.add('bx-moon');
        }
    };
}


// ===================================
// 2. MENU TOGGLE LOGIC
// ===================================

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Toggle the navbar and menu icon on click
if (menuIcon && navbar) {
    menuIcon.onclick = () => {
        // Toggle the 'bx-x' icon class for the animation effect
        menuIcon.classList.toggle('bx-x'); 
        // Toggle the 'active' class to show/hide the menu
        navbar.classList.toggle('active'); 
    };
    
    // Automatically close the mobile menu after clicking a link
    let navLinks = document.querySelectorAll('.navbar a');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Remove the active classes to close the menu on mobile
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        });
    });
}
