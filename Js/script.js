// Function to fetch weather data from OpenWeatherMap API
async function fetchWeatherData() {
  // Replace YOUR_API_KEY with your actual OpenWeatherMap API key
  const apiKey = "dd55b589544feb24d7c5c23b93960d27";
  const location = "Morocco"; // Replace with the desired location

  try {
    // Make a request to the API
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Morocco&appid=dd55b589544feb24d7c5c23b93960d27&units=imperial`
    );

    // Parse the JSON response
    const data = await response.json();

    // Extract relevant data
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const locationName = data.name;

    // Update the HTML content dynamically
    const weatherInfo = document.getElementById("weather-info");
    weatherInfo.innerHTML = `
      <h2>${locationName}</h2>
      <p>${temperature}°F, ${description}</p>
    `;
  } catch (error) {
    console.error(error);
  }
}

// Call the fetchWeatherData function when the page loads
fetchWeatherData();
