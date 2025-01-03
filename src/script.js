document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-bar').classList.toggle('active');
});

let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

setInterval(nextSlide, 5000); // Cambia de imagen cada 5 segundos

showSlide(currentIndex); // Muestra la primera imagen
