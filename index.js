// Banner slider automático
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.slider-dot');
let currentSlide = 0;
function showSlide(idx) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === idx);
        dots[i].classList.toggle('active', i === idx);
    });
    currentSlide = idx;
}
dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => showSlide(idx));
});
setInterval(() => {
    let next = (currentSlide + 1) % slides.length;
    showSlide(next);
}, 4500);

// Testimonios Slider automático
let testimonioActual = 0;
const testimonios = document.querySelectorAll('.testimonio');
if(testimonios.length > 0){
    setInterval(() => {
        testimonios[testimonioActual].classList.remove('active');
        testimonioActual = (testimonioActual + 1) % testimonios.length;
        testimonios[testimonioActual].classList.add('active');
    }, 4200);
}