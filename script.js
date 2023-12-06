const loopValue = true;
const grabCursor = true;
const keyControl = true;
const speed = 400;
const loopAddValue = 4
const initSlide = 5

const videoSwiper = new Swiper(".swiper.is-video-swiper", {
  speed: speed,
  spaceBetween: 0,
  slideActiveClass: "current-video-slide",
  loop: loopValue,
  allowTouchMove: false,
  grabCursor: grabCursor,
  navigation: {
    nextEl: ".swiper-arrow.swiper-next",
    prevEl: ".swiper-arrow.swiper-prev",
  },
  keyboard: {
    enabled: keyControl,
  },
  loopAdditionalSlides: loopAddValue,
  initialSlide: initSlide,
});

const headingSwiper = new Swiper(".swiper.is-heading-swiper", {
  speed: speed,
  spaceBetween: 0,
  loop: loopValue,
  direction: "vertical",
  loopAdditionalSlides: loopAddValue,
  initialSlide: initSlide,
});

const contentSwiper = new Swiper(".swiper.is-content-swiper", {
  speed: speed,
  spaceBetween: 0,
  loop: loopValue,
  direction: "vertical",
  loopAdditionalSlides: loopAddValue,
  initialSlide: initSlide,
});

const photoSwiper = new Swiper(".swiper.is-photo-swiper", {
  speed: speed,
  spaceBetween: 16,
  slidesPerView: 1,
  centeredSlides: true,
  loop: loopValue,
  loopAdditionalSlides: loopAddValue,
  initialSlide: initSlide,
  grabCursor: grabCursor,
});

videoSwiper.controller.control = [photoSwiper, headingSwiper, contentSwiper];
photoSwiper.controller.control = [videoSwiper, headingSwiper, contentSwiper];