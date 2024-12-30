async function getWeather() {
    const city = document.getElementById('city').value.trim();
    const weatherResult = document.getElementById('weather-result');

    if (!city) {
        weatherResult.textContent = 'Please enter a city name.';
        return;
    }

    const url = `https://wttr.in/${city}?format=%l:+%c+%t\n`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch weather information');
        }
        const data = await response.text();
        weatherResult.textContent = data;
    } catch (error) {
        weatherResult.textContent = 'Error: ' + error.message;
    }
}
