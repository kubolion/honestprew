document.querySelectorAll('.read-more-container').forEach(function(container) {
  const targetId = container.getAttribute('data-target');
  const additionalContent = container.querySelector('.additional-content');
  const readMoreBtn = container.querySelector('.read-more-btn');

  readMoreBtn.addEventListener('click', function() {
    if (additionalContent.style.display === 'none' || additionalContent.style.display === '') {
      additionalContent.style.display = 'block';
      this.innerHTML = 'Read Less';
    } else {
      additionalContent.style.display = 'none';
      this.innerHTML = 'Read More';
    }
  });
});
const swiper = new Swiper(".swiper", {
    allowTouchMove: false,

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
  
