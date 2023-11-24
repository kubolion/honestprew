const swiper = new Swiper(".swiper", {
  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

    spaceBetween: -20,
    loop: true,
  
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      851: {
        slidesPerView: 3,
        spaceBetween: -20
      }
    }


  });
  
