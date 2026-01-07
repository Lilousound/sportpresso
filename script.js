// require('dotenv').config();
// const fetch = require('node-fetch'); // Version 2 de node-fetch

// const API_NINJAS_KEY = process.env.API_NINJAS_KEY;
// const apiUrl = "https://api.api-ninjas.com/v1/caloriesburned";
// const sport = "running";
// const duration = 30;
// const weight = 70;

const caloriesForm = document.getElementById("caloriesForm");
const sport = document.getElementById("sport");
const duration = document.getElementById("duration");
const weight = document.getElementById("weight");
const submit = document.getElementById("submit");

caloriesForm.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log(sport.value, duration.value, weight.value);
});

// const url = `${apiUrl}?activity=${sport}&duration=${duration}&weight=${weight}`;

// const options = {
//   method: "GET",
//   headers: {
//     "X-Api-Key": API_NINJAS_KEY
//   }
// };

// async function getCalories() {
//   try {
//     console.log("URL appelée :", url);
//     const response = await fetch(url, options);
//     if (!response.ok) {
//       throw new Error(`Erreur : ${response.status}`);
//     }
//     const data = await response.json();
//     console.log("Réponse complète de l'API :", data);
//     console.log("Calories brûlées :", data.calories);
//   } catch (error) {
//     console.error("Erreur :", error);
//   }
// }

// getCalories();
