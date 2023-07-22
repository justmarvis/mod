const carousel = document.querySelector('.carousel');
const slides = carousel.querySelector('.slides');
const slideWidth = carousel.querySelector('.slide').offsetWidth;
let currentPosition = 0;

function slideCarousel(direction) {
  if (direction === 'next') {
    currentPosition -= slideWidth;
  } else if (direction === 'prev') {
    currentPosition += slideWidth;
  }

  slides.style.transform = `translateX(${currentPosition}px)`;
}

document.querySelector('.next-btn').addEventListener('click', () => {
  slideCarousel('next');
});

document.querySelector('.prev-btn').addEventListener('click', () => {
  slideCarousel('prev');
});

// popup functions for all images
function profilePopup() {
  document.getElementById("profile2").classList.toggle("active");
}
function togglePopup() {
  document.getElementById("popup-1").classList.toggle("active");
}
function togglePopup2() {
  document.getElementById("popup-2").classList.toggle("active");
}
function togglePopup3() {
  document.getElementById("popup-3").classList.toggle("active");
}
function togglePopup() {
  document.getElementById("popup-1").classList.toggle("active");
}
function togglePopup2() {
  document.getElementById("popup-2").classList.toggle("active");
}
function togglePopup3() {
  document.getElementById("popup-3").classList.toggle("active");
}
function togglePopup() {
  document.getElementById("popup-1").classList.toggle("active");
}
function togglePopup2() {
  document.getElementById("popup-2").classList.toggle("active");
}
function togglePopup3() {
  document.getElementById("popup-3").classList.toggle("active");
}
function togglePopup() {
  document.getElementById("popup-1").classList.toggle("active");
}
function togglePopup2() {
  document.getElementById("popup-2").classList.toggle("active");
}
function togglePopup3() {
  document.getElementById("popup-3").classList.toggle("active");
}


