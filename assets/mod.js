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

  // Check if it's the last slide
  const totalSlides = document.querySelectorAll('.slide').length;
  if (currentPosition === -slideWidth * (totalSlides - 1)) {
    // Reset to the first slide
    currentPosition = 0;
    slides.style.transform = `translateX(${currentPosition}px)`;
  }
}

function autoSlide() {
  slideCarousel('next');
}

// Set interval for automatic sliding every 5 seconds
const slideInterval = setInterval(autoSlide, 5000);

document.querySelector('.next-btn').addEventListener('click', () => {
  slideCarousel('next');
  // Reset the interval when manually changing slides
  clearInterval(slideInterval);
  slideInterval = setInterval(autoSlide, 5000);
});

document.querySelector('.prev-btn').addEventListener('click', () => {
  slideCarousel('prev');
  // Reset the interval when manually changing slides
  clearInterval(slideInterval);
  slideInterval = setInterval(autoSlide, 5000);
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
function togglePopupu() {
  document.getElementById("popup-unsee").classList.toggle("active");
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


