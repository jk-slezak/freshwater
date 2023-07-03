// swipers
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

// mobile menu
document.querySelector('.menu-btn').addEventListener('click', function() {
  this.classList.toggle('active');
});

// price and cart amount info
const totalPriceElement = document.getElementById('price');
const totalCartAmount = document.getElementById('cart-amount')

const button1 = document.getElementById('button1');

let totalPrice = 0;
let totalAmount = 0;

button1.addEventListener('click', function() {
  const price = 35.40;

  totalPrice += price;
  totalAmount += 1;

  totalPriceElement.textContent = totalPrice.toFixed(2) + 'zł';
  totalCartAmount.textContent = totalAmount;
});

const button2 = document.getElementById('button2');

button2.addEventListener('click', function() {
  const price = 44.20;

  totalPrice += price;
  totalAmount += 1;

  totalPriceElement.textContent = totalPrice.toFixed(2) + 'zł';
  totalCartAmount.textContent = totalAmount;
});

const button3 = document.getElementById('button3');

button3.addEventListener('click', function() {
  const price = 110.50;

  totalPrice += price;
  totalAmount += 1;

  totalPriceElement.textContent = totalPrice.toFixed(2) + 'zł';
  totalCartAmount.textContent = totalAmount;
});

const button4 = document.getElementById('button4');

button4.addEventListener('click', function() {
  const price = 30.02;

  totalPrice += price;
  totalAmount += 1;

  totalPriceElement.textContent = totalPrice.toFixed(2) + 'zł';
  totalCartAmount.textContent = totalAmount;
});

const button5 = document.getElementById('button5');

button5.addEventListener('click', function() {
  const price = 35.40;

  totalPrice += price;
  totalAmount += 1;

  totalPriceElement.textContent = totalPrice.toFixed(2) + 'zł';
  totalCartAmount.textContent = totalAmount;
});

const button6 = document.getElementById('button6');

button6.addEventListener('click', function() {
  const price = 44.20;

  totalPrice += price;
  totalAmount += 1;

  totalPriceElement.textContent = totalPrice.toFixed(2) + 'zł';
  totalCartAmount.textContent = totalAmount;
});

const button7 = document.getElementById('button7');

button7.addEventListener('click', function() {
  const price = 110.50;

  totalPrice += price;
  totalAmount += 1;

  totalPriceElement.textContent = totalPrice.toFixed(2) + 'zł';
  totalCartAmount.textContent = totalAmount;
});

const button8 = document.getElementById('button8');

button8.addEventListener('click', function() {
  const price = 30.02;

  totalPrice += price;
  totalAmount += 1;

  totalPriceElement.textContent = totalPrice.toFixed(2) + 'zł';
  totalCartAmount.textContent = totalAmount;
});
