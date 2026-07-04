// //////////////////// swiper-1 /////////////////// //
var swiper_1 = new Swiper(".mySwiper_1", {
  effect: "cards",
  grabCursor: true,
  loop: true,
});
// //////////////////// swiper-2 /////////////////// //
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
// //////////////////// swiper-3 /////////////////// //
var swiper_3 = new Swiper(".mySwiper_3", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});
// ///////////////////////////////////////////////// //
