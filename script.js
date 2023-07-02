const swiper = new Swiper(".mainSwiper", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiperProducts = new Swiper(".productsSwiper", {
  slidesPerView: 1,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 14,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 14,
      navigation: {
        nextEl: ".btn-next",
        prevEl: ".btn-prev",
      },
    }
  }
});

document.querySelector('.menu-btn').addEventListener('click', function() {
  this.classList.toggle('active');
});