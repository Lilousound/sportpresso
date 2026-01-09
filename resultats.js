// Récupère les paramètres de l'URL
const params = new URLSearchParams(window.location.search);
const calories = params.get('calories');
const sport = params.get('sport');
const duration = params.get('duration');

const recipeCard = document.getElementById("recipe-card");
const recipeName = document.getElementById("recipe-name");
const recipeCalories = document.getElementById("recipe-calories");
const recipeIngredients = document.getElementById("recipe-ingredients");
const recipeImage = document.getElementById("recipe-image");


// Affiche les résultats
document.getElementById("resultats").innerHTML = `
  <h2>Vous allez brûler environ ${calories}</strong> kcal.</h2>
  <p>${sport} ${duration}</p>
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
  const selectedPreDrink = preTrainingDrink[randomPre];
  console.log(selectedPreDrink)
  postTrainingDrink = postTrainingDrinkAll.filter((drink) => drink.calories >= postMinCalories && drink.calories <= postMaxCalories);
  // si n'existe pas return post avec max calories
  if (postTrainingDrink.length === 0) {
    postTrainingDrink = postTrainingDrinkAll.filter((drink) => drink.calories <= postMaxCalories);
  }
  const randomPost = Math.floor(Math.random() * postTrainingDrink.length);
  console.log(postTrainingDrink[randomPost]);


  recipeName.innerHTML = `<h4><strong>${selectedPreDrink.name}</h4></p>`;
  recipeCalories.innerHTML = `<p>Calories: ${selectedPreDrink.calories}</p>`;
  recipeIngredients.innerHTML = `<p>Ingredients: ${selectedPreDrink.ingredients.join(", ")}</p>`;
  recipeImage.setAttribute("src", `${selectedPreDrink.image}`);
  console.log(recipeImage)

}

getSuggestedRecipes(calories);
