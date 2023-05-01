const slides = document.querySelectorAll('.test-item');
const buttons = document.querySelectorAll('.carousel-ctrl-container button');

let activeSlide = Math.floor(Math.random() * slides.length);
let nextSlide = activeSlide < slides.length - 1 ? activeSlide + 1 : 0;
let prevSlide = activeSlide > 0 ? activeSlide - 1 : slides.length - 1;

const updateSlides = () => {
  slides.forEach((slide) => {
    slide.classList.remove('active', 'prev', 'next')
  });

  slides[activeSlide].classList.add('active');
  slides[nextSlide].classList.add('next');
  slides[prevSlide].classList.add('prev');
};

const changeIndex = (num) => {
  activeSlide = num;
  nextSlide = activeSlide < slides.length - 1 ? activeSlide + 1 : 0;
  prevSlide = activeSlide > 0 ? activeSlide - 1 : slides.length - 1;
  updateSlides();
};

const goToNext = () => activeSlide < slides.length - 1 ? changeIndex(activeSlide + 1) : changeIndex(0);
const goToPrev = () => activeSlide > 0 ? changeIndex(activeSlide - 1) : changeIndex(slides.length - 1);

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => i === 0 ? goToPrev():goToNext());
};

updateSlides();