var swiper_1 = new Swiper(".mySwiper_1", {
  effect: "cards",
  grabCursor: true,
  loop: true,
});
// ///////////////////////////////////////////////// //
var swiper_2 = new Swiper(".mySwiper_2", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
// ///////////////////////////////////////////////// //
