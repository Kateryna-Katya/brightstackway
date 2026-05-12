import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

let swiper = null;

function initSwiper() {
  // якщо екран 1440+ — слайдер не створюємо
  if (window.innerWidth >= 1440) {
    if (swiper) {
      swiper.destroy(true, true);
      swiper = null;
    }
    return;
  }

  // щоб не створювався повторно
  if (swiper) return;

  swiper = new Swiper('.my-swiper', {
    modules: [Autoplay],

    loop: true,
    speed: 6000,
    allowTouchMove: false,
    grabCursor: false,

    slidesPerView: 1.1,
    spaceBetween: 16,

    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    },
  });
}

// запуск
initSwiper();

// перевірка при ресайзі
window.addEventListener('resize', initSwiper);