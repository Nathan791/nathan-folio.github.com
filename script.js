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
/**
 * Gestion du Thème Clair/Sombre
 */
document.addEventListener('DOMContentLoaded', function() {
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;
    
    // 1. Vérifier la préférence stockée (au chargement)
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-theme');
        themeIcon.classList.remove('bx-sun');
        themeIcon.classList.add('bx-moon');
    }

    // 2. Écouteur d'événement sur le bouton
    themeIcon.onclick = () => {
        // Basculer la classe sur le <body>
        body.classList.toggle('light-theme');

        // Mettre à jour l'icône et sauvegarder la préférence
        if (body.classList.contains('light-theme')) {
            // Passer au thème clair -> afficher l'icône Lune pour basculer vers le sombre
            themeIcon.classList.remove('bx-sun');
            themeIcon.classList.add('bx-moon');
            localStorage.setItem('theme', 'light');
        } else {
            // Passer au thème sombre -> afficher l'icône Soleil pour basculer vers le clair
            themeIcon.classList.remove('bx-moon');
            themeIcon.classList.add('bx-sun');
            localStorage.setItem('theme', 'dark');
        }
    };

    // (La fonction 'type' de l'effet de frappe JavaScript suit ici)
    // ...
});