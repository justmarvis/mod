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

// footer
let week_names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
    'November', 'December'];
let date = new Date();
let weekname = week_names[date.getDay()];
let monthname = month_names[date.getMonth()];

const dateoutput = document.querySelector('#currentdate');

dateoutput.textContent = "Updated: " + weekname + ", " + date.getDate() + " " + monthname + " " + date.getFullYear();

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


