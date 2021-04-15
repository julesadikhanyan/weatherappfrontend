function getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(setCurrentPosition, setDefaultPosition);
}

async function setCurrentPosition(position) {
    let { latitude, longitude } = position.coords;

    printCurrentCity(await fetchWeatherByCoords(latitude, longitude));
}

async function setDefaultPosition() {
    let name = 'Saint Petersburg';
    await fetchWeatherByName(name);

    printCurrentCity(await fetchWeatherByName(name));
}