// Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach(slide => slide.style.display = 'none');
    slides[index].style.display = 'block';
}

function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    if (currentSlide >= slides.length) currentSlide = 0;
    showSlide(currentSlide);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    setInterval(() => changeSlide(1), 5000);
});

// Filtrage des activités
function filterActivities(category) {
    const activities = document.querySelectorAll('.activite');
    activities.forEach(activity => {
        if (category === 'all' || activity.dataset.category === category) {
            activity.style.display = 'block';
        } else {
            activity.style.display = 'none';
        }
    });
}

// Défilement vers une section spécifique
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Formulaire de contact
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Merci pour votre message ! Nous vous répondrons bientôt.');
    this.reset();  // Réinitialiser le formulaire après envoi
});
