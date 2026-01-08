// require('dotenv').config();
// const fetch = require('node-fetch'); // Version 2 de node-fetch

// const API_NINJAS_KEY = process.env.API_NINJAS_KEY;

const apiUrl = "https://api.api-ninjas.com/v1/caloriesburned";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": API_NINJAS_KEY
  }
};

async function getCalories() {
  try {
    const sport = document.getElementById("sport").value;
    const duration = document.getElementById("duration").value;
    const weight = document.getElementById("weight").value;
    const weightInPound = Math.ceil(weight*2.20462); // on convertit les Kgs en Pounds, arrondi

    const url = `${apiUrl}?activity=${sport}&duration=${duration}&weight=${weightInPound}`;

    console.log("Sport :", sport);
    console.log("Durée :", duration);
    console.log("Poids :", weight);

    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Erreur : ${response.status}`);
    }
    const data = await response.json();
    const calories = data[0].calories_per_hour;
    console.log("Réponse complète de l'API :", data);
    console.log("Calories brûlées :", calories);

    // URL avec les données
    const resultUrl = `resultats.html?calories=${encodeURIComponent(calories)}&sport=${encodeURIComponent(sport)}&duration=${encodeURIComponent(duration)}`;
    window.location.href = resultUrl; // Redirige vers la page résultats
  } catch (error) {
    console.error("Erreur :", error);
  }
}

caloriesForm.addEventListener("submit", function(event) {
  event.preventDefault();
  getCalories();

});
