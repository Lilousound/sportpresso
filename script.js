// Menu burger
const burgerMenu = document.getElementById('burger-menu');
const menu = document.getElementById('menu');
burgerMenu.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Flip card des recettes -resultats-
const recipeCards = document.querySelectorAll('.recipe-card');
recipeCards.forEach((card) => {
  card.addEventListener('click', function() {
    // Applique le toggle UNIQUEMENT à la carte cliquée (this)
    this.classList.toggle('is-flipped');
  });
});
