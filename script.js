const menuBtn = document.querySelector(".menu__btn");
const menuMobile = document.querySelector(".header__menu-list");

menuBtn.addEventListener("click", () => {
  menuMobile.classList.toggle("menu--open");
});

function makeCall() {
  // Замените номер телефона на нужный
  const phoneNumber = '+12799005599';

  // Формируем URL для звонка
  const telUrl = 'tel:' + phoneNumber;

  // Открываем URL в новом окне (может вызвать звонок на мобильных устройствах)
  window.open(telUrl, '_blank');
}
