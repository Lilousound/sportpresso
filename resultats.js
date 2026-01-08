// Récupère les paramètres de l'URL
const params = new URLSearchParams(window.location.search);
const calories = params.get('calories');
const sport = params.get('sport');
const duration = params.get('duration');

// Affiche les résultats
document.getElementById("resultats").innerHTML = `
  <h2>Vous allez brûler environ <strong>${calories}</strong> kcal.</h2>
  <p>${sport} ${duration}</p>
`;
