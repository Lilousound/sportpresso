// on mélange l'array des recettes de café pour les afficher dans un ordre aléatoire à chaque chargement
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}
// Appliquer le mélange
const shuffledRecipes = shuffleArray(coffeeRecipes);

// Sélectionner les 5 premières recettes après mélange
const randomRecipes = shuffledRecipes.slice(0, 5);

const container = document.getElementById('group1');
const container2 = document.getElementById('group2');
container.innerHTML = '';
container2.innerHTML = '';

randomRecipes.forEach((recipe) => {
  const card = document.createElement('div');
  card.className = 'card';
  card.style.backgroundImage = `url(${recipe.image})`;

  card.innerHTML = `
    <div class="card">
      <div class="infos-card-carousel">
        <h3>${recipe.name}</h3>
        <p><strong>${recipe.calories}</strong> kcal</p>
      </div>
    </div>
  `;

  container.appendChild(card);
  container2.appendChild(card.cloneNode(true));
});
