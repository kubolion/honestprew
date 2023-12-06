const menuBtn = document.querySelector(".menu__btn");
const menuMobile = document.querySelector(".header__menu-list");

menuBtn.addEventListener("click", () => {
  menuMobile.classList.toggle("menu--open");
});

function makeCall() {
  
  const phoneNumber = '+12799005599';

  // Формируем URL для звонк
  const telUrl = 'tel:' + phoneNumber;

  const link = document.createElement('a');
  link.href = telUrl;

  document.body.appendChild(link);

  link.click();


  document.body.removeChild(link);
}
