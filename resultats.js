// Récupère les paramètres de l'URL
const params = new URLSearchParams(window.location.search);
const calories = params.get('calories');
const sport = params.get('sport');
const sportLabel = getSportLabel(sport);
const duration = params.get('duration');

const recipeCardPre = document.getElementById("recipe-card-pre");
const recipeCardPost = document.getElementById("recipe-card-post");


// fonction pour obtenir le label du sport sélectionné
function getSportLabel(value) {
  const sport = sports.find(s => s.value === value);
  return sport ? sport.label : value;
}

// Affiche les résultats
document.getElementById("resultats").innerHTML = `
  <p><em>${sportLabel} pendant ${duration} minutes</em></p>
  <h2>Tu vas brûler environ <u>${calories}</u></strong> kcal.</h2>
`;


function getSuggestedRecipes(caloriesBurned) {

  let preMinCalories, preMaxCalories, postMinCalories, postMaxCalories; // détermine les plages de calories en fonction de caloriesBurned
  const preTrainingDrinkAll = coffeeRecipes.filter((drink) => drink.type === "pre-training"); // sélectionne les pre drink
  const postTrainingDrinkAll = coffeeRecipes.filter((drink) => drink.type === "post-training"); // sélectionne les post drink
  let preTrainingDrink = [];
  let postTrainingDrink = [];
  if (caloriesBurned < 250) {
    preMinCalories = 0; preMaxCalories = 50;
    postMinCalories = 100; postMaxCalories = 250;

  } else if (caloriesBurned <400){
    preMinCalories = 50; preMaxCalories = 100;
    postMinCalories = 250; postMaxCalories = 400;

  } else if (caloriesBurned < 600){
    preMinCalories = 100; preMaxCalories = 300;
    postMinCalories = 400; postMaxCalories = 600;

  } else if (caloriesBurned > 600){
    preMinCalories = 300; preMaxCalories = 400;
    postMinCalories = 600; postMaxCalories = 1000;
  }

  preTrainingDrink = preTrainingDrinkAll.filter((drink) => drink.calories >= preMinCalories && drink.calories <= preMaxCalories);
  // si n'existe pas return pre avec max calories
  if (preTrainingDrink.length === 0) {
    preTrainingDrink = preTrainingDrinkAll.filter((drink) => drink.calories <= preMaxCalories);
  }
  const randomPre = Math.floor(Math.random() * preTrainingDrink.length);
  postTrainingDrink = postTrainingDrinkAll.filter((drink) => drink.calories >= postMinCalories && drink.calories <= postMaxCalories);
  // si n'existe pas return post avec max calories
  if (postTrainingDrink.length === 0) {
    postTrainingDrink = postTrainingDrinkAll.filter((drink) => drink.calories <= postMaxCalories);
  }
  const randomPost = Math.floor(Math.random() * postTrainingDrink.length);
  console.log(postTrainingDrink[randomPost]);


  recipeCardPre.innerHTML += createDrinkCard(preTrainingDrink[randomPre]);
  recipeCardPre.style.backgroundImage = `url(${preTrainingDrink[randomPre].image})`;
  recipeCardPost.style.backgroundImage = `url(${postTrainingDrink[randomPost].image})`;
  recipeCardPost.innerHTML += createDrinkCard(postTrainingDrink[randomPost]);
}

getSuggestedRecipes(calories);


function createDrinkCard(drink) {
  return `
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

// Flip card des recettes -resultats-
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
