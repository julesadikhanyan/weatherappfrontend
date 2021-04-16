const server = 'https://itmoweatherappbackend.herokuapp.com';
const serverCoords = `${server}/weather/coordinates`;
const serverName = `${server}/weather/city`;
const serverFav = `${server}/favorites`;

async function fetchWeatherByCoords(latitude, longitude) {
    try {
        let response = await fetch(`${serverCoords}?lat=${latitude}&lon=${longitude}`);
        return response.json();
    } catch (e) {
        console.log(e);
    }
}

async function fetchWeatherByName(name) {
    try {
        let response = await fetch(`${serverName}?q=${name}`);
        return response.json();
    } catch (e) {
        console.log(e);
    }
}

async function fetchAddCity(name) {
    let data = await fetch(`${serverFav}?q=${name}`, {method: "POST"});
    if (data.status === 201) {
        return await data.json();
    }

    if (data.status === 409) {
        return false;
    }
    throw new Error(`Request is bad. Status ${data.status}`);
}

async function fetchDeleteCity(name) {
    let data = await fetch (`${serverFav}?q=${name}`, {method: "DELETE"});

    if (data.status !== 204) {
        throw new Error(`Request is bad. Status ${data.status}. Reload your page`);
    }
}

async function fetchGetFavourites() {
    let data = await fetch(serverFav);
    if (data.status === 200) {
        return data.json();
    }
    throw new Error(`Request is bad. Status ${data.status}`);
}