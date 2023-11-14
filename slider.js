const swiper = new Swiper(".swiper", {
    // Optional parameters
  
    slidesPerView: 3,
    spaceBetween: -20,
    loop: true,
  
    // If we need pagination
    // pagination: {
    //   el: ".swiper-pagination",
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    // And if we need scrollbar
  });
  