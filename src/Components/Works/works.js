let slider = document.querySelector(".works__content__slider"),
  bigImg = document.querySelector(".works__content__slider__img-img"),
  img = document.querySelectorAll(".works__content__elem-img"),
  right = document.querySelector(".works__content__slider__arrow-right"),
  left = document.querySelector(".works__content__slider__arrow-left"),
  slideIndex = 1;

const changeImg = (n) => {
  if (n > img.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = img.length;
  }

  bigImg.src = `../src/Components/Works/style/${slideIndex - 1}.png`;
};

const plusSlides = (n) => {
  changeImg((slideIndex += n));
};

img.forEach((elem, index) => {
  elem.addEventListener("click", (item) => {
    slider.classList.toggle("active");
    slideIndex = index + 1;
    bigImg.src = `../src/Components/Works/style/${index}.png`;
  });
});

slider.addEventListener("click", (elem) => {
  if (elem.target === slider) {
    slider.classList.toggle("active");
  }
});

right.addEventListener("click", (elem) => {
  plusSlides(1);
});

left.addEventListener("click", (elem) => {
  plusSlides(-1);
});
