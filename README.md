# urban-air-quality-assistant
A GenAI-powered assistant for urban air quality awareness.Visibility
async function getAirQuality() {
  const status = document.getElementById("status");
  const aqiDisplay = document.getElementById("aqi");

  if (!navigator.geolocation) {
    status.textContent = "Location is not supported.";
    return;
  }

  status.textContent = "Finding your location...";

  navigator.geolocation.getCurrentPosition(async (position) => {
    try {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      const url =
        `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lon}&current=us_aqi`;

      const response = await fetch(url);
      if (!response.ok) throw new Error("API error");

      const data = await response.json();
      const aqi = data.current.us_aqi;

      aqiDisplay.textContent = aqi;

      let message;

      if (aqi <= 50) message = "Good 🌱";
      else if (aqi <= 100) message = "Moderate 🌤️";
      else if (aqi <= 150) message = "Unhealthy for sensitive groups ⚠️";
      else if (aqi <= 200) message = "Unhealthy";
      else if (aqi <= 300) message = "Very Unhealthy";
      else message = "Hazardous";

      status.textContent = message;

    } catch (error) {
      status.textContent = "Unable to load air quality data.";
    }
  }, () => {
    status.textContent = "Please allow location access.";
  });
}

function askAssistant() {
  const question = document.getElementById("question").value.toLowerCase();
  const answer = document.getElementById("answer");

  if (!question.trim()) {
    answer.textContent = "Please enter a question.";
  } else if (question.includes("travel")) {
    answer.textContent = "Consider walking, cycling or public transport to reduce emissions.";
  } else if (question.includes("indoor")) {
    answer.textContent = "Ventilate your room when outdoor air quality is good and keep indoor spaces clean.";
  } else {
    answer.textContent = "Check your local AQI, reduce unnecessary emissions and follow local air-quality advice.";
  }
}
