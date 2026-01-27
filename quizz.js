


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
    console.log("URL de la requête :", url);

    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Erreur : ${response.status}`);
    }
    const data = await response.json();
    const calories = data[0].calories_per_hour;
     const duration_minutes = data[0].duration_minutes;
    console.log("Réponse complète de l'API :", data);
    console.log("Calories brûlées :", calories);
    console.log("Durée en minutes :", duration_minutes);

    // URL avec les données
    const resultUrl = `resultats.html?calories=${encodeURIComponent(calories)}&sport=${encodeURIComponent(sport)}&duration=${encodeURIComponent(duration)}`;
    window.location.href = resultUrl; // Redirige vers la page résultats
  } catch (error) {
    console.error("Erreur :", error);
  }
}

caloriesForm.addEventListener("submit", function(event) { // écoute le submit du form
  event.preventDefault();
  getCalories();

});


// Remplit le select des sports
const selectElement = document.getElementById("sport"); // sélectionne l'élément select

sports.forEach(sport => { // pour chaque sport dans le tableau sports
  const option = document.createElement("option");
  option.value = sport.value;
  option.textContent = sport.label;
  selectElement.appendChild(option);
});
