new Swiper(".banner__swiper", {
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className} banner__pagination-bullet"></span>`;
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const statisticsSwiper = new Swiper(".statistics__swiper", {
  slidesPerView: 4,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".statistics__next-btn",
    prevEl: ".statistics__prev-btn",
  },
});

function updateSlidesPerView() {
  if (window.innerWidth <= 768) {
    statisticsSwiper.params.slidesPerView = 1;
  } else if (window.innerWidth <= 940) {
    statisticsSwiper.params.slidesPerView = 2;
  } else if (window.innerWidth <= 1024) {
    statisticsSwiper.params.slidesPerView = 3;
  } else {
    statisticsSwiper.params.slidesPerView = 4;
  }
  statisticsSwiper.update();
}

window.addEventListener("resize", updateSlidesPerView);

window.addEventListener("load", updateSlidesPerView);
