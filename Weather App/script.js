// Function to handle default city weather data
document.addEventListener("DOMContentLoaded", function () {
    fetchLocalCity();
});

// Function to handle city search
document.getElementById("location-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const cityInput = document.getElementById("city").value;
    if (cityInput) {
        fetchWeatherData(cityInput);
    } else {
        alert("Please enter a city name.");
    }
});

// Extract current city on page load
async function fetchLocalCity() {
    const ipInfoAPI = "Your API Key"; // Replace with your IPinfo API key
    const ipInfoURL = `https://ipinfo.io?token=${ipInfoAPI}`;
    try {
        const response = await fetch(ipInfoURL);
        if (!response.ok) {
            throw new Error("Error fetching API data");
        }
        const data = await response.json();
        const localCity = data.city;
        fetchWeatherData(localCity);
    } catch (error) {
        console.error("Error fetching city data:", error);
    }
}

// Function to fetch weather data based on city name
async function fetchWeatherData(city) {
    const openWeatherAPIKey = "Your API Key"; // Replace with your OpenWeatherMap API key
    const openWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openWeatherAPIKey}&units=metric`;
    const cityInput = document.getElementById("city");
    try {
        const weatherData = await fetch(openWeatherURL);
        if (weatherData.status === 404) {
            alert("City not found. Please enter a valid city name.");
            cityInput.value = "";
        }
        if (!weatherData.ok) {
            throw new Error("Error fetching weather data");
        }
        const weatherDataJson = await weatherData.json();
        cityInput.value = "";
        const temperature = weatherDataJson.main.temp;
        const weather = weatherDataJson.weather[0].main;
        const humidity = weatherDataJson.main.humidity;
        const windSpeed = weatherDataJson.wind.speed;

        // Changing weather icon based on weather condition
        const weatherIcon = document.getElementById("weather-icon");
        if (weather === "Clear") {
            weatherIcon.src = "images/clear.png";
        } else if (weather === "Rain") {
            weatherIcon.src = "images/rain.png";
        } else if (weather === "Clouds") {
            weatherIcon.src = "images/clouds.png";
        } else if (weather === "Snow") {
            weatherIcon.src = "images/snow.png";
        } else if (weather === "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        } else {
            weatherIcon.src = "images/mist.png";
        }

        // Displaying temperature
        const temperatureElement = document.getElementById("temperature");
        temperatureElement.innerHTML = `${temperature}°C`;

        // Displaying city
        const cityElement = document.getElementById("city-name");
        cityElement.innerHTML = city.charAt(0).toUpperCase() + city.slice(1);

        // Displaying humidity and wind
        const humidityElement = document.getElementById("humidity");
        humidityElement.innerHTML = `${humidity}%`;
        const windElement = document.getElementById("wind");
        windElement.innerHTML = `${(windSpeed * 3.6).toFixed(2)} km/h`;

        // Displaying weather information after everything is loaded
        const weatherInfoContainer = document.querySelector(".weather-info");
        weatherInfoContainer.style.display = "block";
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}