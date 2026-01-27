// Menu burger
const burgerMenu = document.getElementById('burger-menu');
const menu = document.getElementById('menu');
burgerMenu.addEventListener('click', () => {
  menu.classList.toggle('active');
});

const copyright = document.getElementById('copyright');
const currentYear = new Date().getFullYear();
copyright.textContent = `© ${currentYear} Sportpresso. All rights reserved.`;
