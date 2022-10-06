const slideShowContainer = document.querySelector('.slideshow-container');
const slides = document.querySelectorAll('.slide');
let slideIndex = 0;
showSlides();

function showSlides() {
  slideIndex++;
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove('fade');
    slides[i].style.display = 'none';
  }

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
  slides[slideIndex - 1].classList.add('fade');

  setTimeout(showSlides, 10000);
}
