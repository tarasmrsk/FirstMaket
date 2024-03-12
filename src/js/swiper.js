window.addEventListener('DOMContentLoaded', () => {

    const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
      let swiper;

      breakpoint = window.matchMedia(breakpoint);

      const enableSwiper = function(className, settings) {
        swiper = new Swiper(className, settings);
      }

      const checker = function() {
        if (breakpoint.matches) {
          return enableSwiper(swiperClass, swiperSettings);
        } else {
          if (swiper !== undefined) swiper.destroy(true, true);
          return;
        }
      };

      breakpoint.addEventListener('change', checker);
      checker();
    }

    resizableSwiper(
      '(max-width: 768px)',
      '.slider-1',
      {

        slidesPerView: 'auto',
        loop: true,

        pagination: {
          el: '.swiper-pagination',

        },
      },
    );

    resizableSwiper(
      '(max-width: 768px)',
      '.slider-2',
      {

        slidesPerView: 'auto',
        loop: true,

        pagination: {
          el: '.swiper-pagination',

        },
      },
    );

    resizableSwiper(
      '(max-width: 768px)',
      '.slider-3',
      {

        slidesPerView: 'auto',
        loop: true,

        pagination: {
          el: '.swiper-pagination',

        },
      },
    );
  });
