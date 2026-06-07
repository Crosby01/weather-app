async function getWeather() {

    const cityInput = document.getElementById("city");
    const resultDiv = document.getElementById("result");

    let city = cityInput.value.trim();

    if (!city) {
        city = "Port Harcourt";
    }

    try {

        resultDiv.innerHTML = "Loading...";

        const response =
            await fetch(`/api/weather?city=${encodeURIComponent(city)}`);

        const data = await response.json();

        resultDiv.innerHTML = `
            <h2>${city}</h2>
            <p>Temperature: ${data.currentConditions.temp}°C</p>
            <p>Condition: ${data.currentConditions.conditions}</p>
        `;

    } catch (error) {

        console.error(error);

        resultDiv.innerHTML =
            "Could not fetch weather data ❌";
    }
}