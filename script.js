async function getWeather() {
    const apiKey = 'YOUR_API_KEY'; // Замените на ваш API-ключ OpenWeatherMap
    const city = document.getElementById('city').value;
    const weatherResult = document.getElementById('weather-result');

    if (!city) {
        weatherResult.innerHTML = 'Please enter a city name.';
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        const { main, weather } = data;
        weatherResult.innerHTML = `
            <p><strong>${data.name}</strong></p>
            <p>${weather[0].description}</p>
            <p>Temperature: ${main.temp}°C</p>
            <p>Humidity: ${main.humidity}%</p>
        `;
    } catch (error) {
        weatherResult.innerHTML = 'Error: ' + error.message;
    }
}
