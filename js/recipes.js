const recipesContainer = document.getElementById('recipes-container');

function createRecipeCard(drink) {
  return `
        <div class="recipe-card" style="background-image: url(${drink.image})" id="${drink.name}">
          <div class="infos card__face--front">
            <div class="infos-title">
              <div class="recipe-name"><strong>${drink.name}</strong></div>
              <div class="recipe-calories"><strong>${drink.calories} kCal</strong></div>
            </div>

            <div class="recipe-benefits">Bénéfices: ${drink.benefits}</div>
            <div class="arrow">Voir la recette ➔</div>
          </div>

          <div class="infos card-face card__face--back">
            <div class="infos-title">
              <div class="recipe-name"><strong>${drink.name}</strong></div>
            </div>

            <div class="recipe-ingredients"><em>Ingrédients:</em><br> ${drink.ingredients.join(", ")}</div>
            <div class="recipe-instructions"><em>Instructions:</em><br> ${drink.instructions.join("<br>")}</div>
          </div>
            `;
};

coffeeRecipes.forEach(recipe => {
  recipesContainer.innerHTML += createRecipeCard(recipe);
});

// Flip card des recettes -recettes-
const recipeCards = document.querySelectorAll('.recipe-card');
recipeCards.forEach((card) => {
  card.addEventListener('click', function() {
    // Applique le toggle UNIQUEMENT à la carte cliquée (this)
    this.classList.toggle('is-flipped');
    // faire disparaître le block info au clic après 1s
    const infos = this.querySelector('.infos');
    setTimeout(() => {
      if (infos.style.display === "none") {
        infos.style.display = "block";
      } else {
        infos.style.display = "none";
      }
    }, 300);

  });
});
