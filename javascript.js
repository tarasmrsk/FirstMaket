const swiperContainer = document.querySelector('.swiper');
let mySwiper = null;

function initSwiper() {
    if (window.matchMedia('(max-width: 768px)').matches) {

        if (!mySwiper) {
            mySwiper = new Swiper(swiperContainer, {
              slidesPerView: 'auto',
              loop: true,

              pagination: {
              el: '.swiper-pagination',

              },

            });
        }
    } else {

        if (mySwiper) {
            mySwiper.destroy();
            mySwiper = null;
        }
    }
}

initSwiper();
window.addEventListener('resize', initSwiper);


let swiper = document.querySelector('.swiper');
let clickButton = document.querySelector('.clickButton');

clickButton.onclick = function() {
  swiper.classList.toggle('click-mode'),
  clickButton.classList.toggle('close-button');
  "Показать все" == clickButton.textContent ? clickButton.textContent = "Скрыть" : clickButton.textContent = "Показать все"
};