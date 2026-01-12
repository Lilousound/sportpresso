const burgerMenu = document.getElementById('burger-menu');
const menu = document.getElementById('menu');
burgerMenu.addEventListener('click', () => {
  menu.classList.toggle('active');
});


const selectElement = document.getElementById("sport"); // sélectionne l'élément select

sports.forEach(sport => { // pour chaque sport dans le tableau sports
  const option = document.createElement("option");
  option.value = sport.value;
  option.textContent = sport.label;
  selectElement.appendChild(option);
});
