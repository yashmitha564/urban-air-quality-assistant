
function getAirQuality() {
  // Sample AQI for the first demonstration
  const aqi = Math.floor(Math.random() * 100) + 1;

  document.getElementById("aqi").textContent = aqi;

  let status = "";

  if (aqi <= 50) {
    status = "Good 🌱";
  } else if (aqi <= 100) {
    status = "Moderate 🌤️";
  } else if (aqi <= 150) {
    status = "Unhealthy for sensitive groups ⚠️";
  } else if (aqi <= 200) {
    status = "Unhealthy";
  } else if (aqi <= 300) {
    status = "Very Unhealthy";
  } else {
    status = "Hazardous";
  }

  document.getElementById("status").textContent = status;
}

function askAssistant() {
  const question = document
    .getElementById("question")
    .value.toLowerCase();

  const answer = document.getElementById("answer");

  if (!question.trim()) {
    answer.textContent = "Please enter a question.";
    return;
  }

  if (question.includes("pollution") || question.includes("air")) {
    answer.textContent =
      "Air pollution can affect health. Check local AQI and reduce exposure when pollution is high.";
  } else if (question.includes("plant")) {
    answer.textContent =
      "Plants can support greener spaces, but they do not replace proper air filtration.";
  } else if (question.includes("travel") || question.includes("vehicle")) {
    answer.textContent =
      "Walking, cycling and public transport can help reduce transport emissions.";
  } else if (question.includes("indoor")) {
    answer.textContent =
      "Keep indoor spaces clean and ventilate when outdoor air quality is suitable.";
  } else {
    answer.textContent =
      "Try asking about air pollution, indoor air quality, plants or low-emission travel.";
  }
}
