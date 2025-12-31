<<<<<<< HEAD
let index = 0;
const slides = document.querySelector('.slides');
const total = slides.children.length;
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dotsContainer = document.querySelector('.dots');
let autoplayInterval = null;
let startX = 0;

function createDots() {
    for (let i = 0; i < total; i++) {
        const btn = document.createElement('button');
        btn.setAttribute('aria-label', `Ir a la imagen ${i+1}`);
        btn.addEventListener('click', () => showSlide(i));
        dotsContainer.appendChild(btn);
    }
}

function updateDots() {
    const dots = dotsContainer.children;
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.toggle('active', i === index);
    }
}

function showSlide(i) {
    index = (i + total) % total; // asegura que no se salga del rango
    slides.style.transform = `translateX(-${index * 100}%)`;
    updateDots();
}

function moveSlide(step) {
    showSlide(index + step);
}

prevBtn.addEventListener('click', () => moveSlide(-1));
nextBtn.addEventListener('click', () => moveSlide(1));

// teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') moveSlide(-1);
    if (e.key === 'ArrowRight') moveSlide(1);
});

// autoplay with pause on hover
function startAutoplay() {
    stopAutoplay();
    autoplayInterval = setInterval(() => moveSlide(1), 4000);
}

function stopAutoplay() {
    if (autoplayInterval) clearInterval(autoplayInterval);
}

document.querySelector('.slider').addEventListener('mouseenter', stopAutoplay);
document.querySelector('.slider').addEventListener('mouseleave', startAutoplay);

// touch / swipe support
slides.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; stopAutoplay(); });
slides.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = endX - startX;
    if (Math.abs(diff) > 40) {
        if (diff > 0) moveSlide(-1); else moveSlide(1);
    }
    startAutoplay();
});

// inicialización
createDots();
showSlide(0);
=======
let index = 0;
const slides = document.querySelector('.slides');
const total = slides.children.length;
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dotsContainer = document.querySelector('.dots');
let autoplayInterval = null;
let startX = 0;

function createDots() {
    for (let i = 0; i < total; i++) {
        const btn = document.createElement('button');
        btn.setAttribute('aria-label', `Ir a la imagen ${i+1}`);
        btn.addEventListener('click', () => showSlide(i));
        dotsContainer.appendChild(btn);
    }
}

function updateDots() {
    const dots = dotsContainer.children;
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.toggle('active', i === index);
    }
}

function showSlide(i) {
    index = (i + total) % total; // asegura que no se salga del rango
    slides.style.transform = `translateX(-${index * 100}%)`;
    updateDots();
}

function moveSlide(step) {
    showSlide(index + step);
}

prevBtn.addEventListener('click', () => moveSlide(-1));
nextBtn.addEventListener('click', () => moveSlide(1));

// teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') moveSlide(-1);
    if (e.key === 'ArrowRight') moveSlide(1);
});

// autoplay with pause on hover
function startAutoplay() {
    stopAutoplay();
    autoplayInterval = setInterval(() => moveSlide(1), 4000);
}

function stopAutoplay() {
    if (autoplayInterval) clearInterval(autoplayInterval);
}

document.querySelector('.slider').addEventListener('mouseenter', stopAutoplay);
document.querySelector('.slider').addEventListener('mouseleave', startAutoplay);

// touch / swipe support
slides.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; stopAutoplay(); });
slides.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = endX - startX;
    if (Math.abs(diff) > 40) {
        if (diff > 0) moveSlide(-1); else moveSlide(1);
    }
    startAutoplay();
});

// inicialización
createDots();
showSlide(0);
>>>>>>> 02721cc7465a66e9ff76ba660c164fd5fba7d53d
startAutoplay();