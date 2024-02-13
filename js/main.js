'use strict';

const slider = document.querySelector('.js__slider-box');
const slides = document.querySelectorAll('.js__slider');
let currentIndex = 1;


function showSlide(index) {
    const newPosition = -index * 100 + "%";
    slider.style.transform = 'translateX(' + newPosition + ')';
};

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
};

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
};

function loop(){
    slider.style.transition = 'none';
    showSlide(currentIndex);
    void slider.offsetWidth;
    slider.style.transition = 'transform 0.5s ease-in-out';
};

function prevLoop() {
    if (currentIndex === 0) {
        currentIndex = (slides.length - 2);
        loop();
        prevSlide();
    } else {
        prevSlide();
    }
};

function nextLoop() {
    if (currentIndex === (slides.length - 1)) {
        currentIndex = 1;
        loop();
        nextSlide();
    } else {
        nextSlide();
    }
};


// setInterval(nextSlide, 3000);

document.querySelector('.js__left-btn').addEventListener('click', prevLoop);
document.querySelector('.js__right-btn').addEventListener('click', nextLoop);
