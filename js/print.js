function printCurrentCity(data) {
    let city = document.querySelector('.current-city');
    printCity(city, data);
}

function printFavoriteCity(data, city) {

    printCity(city, data);
}

function printLoading() {
    let city = document.querySelector('.current-city');
    city.querySelector('h2').innerHTML = 'Loading...';
    city.querySelector('img').src = 'img/update.svg';
    city.querySelector('.city-header p').innerHTML = '';
    city.querySelector('.feels-like').innerHTML = '';
    city.querySelector('.wind-speed').innerHTML = '';
    city.querySelector('.humidity').innerHTML = '';
    city.querySelector('.pressure').innerHTML = '';
    city.querySelector('.coords').innerHTML = '';
}


function printCity(city, data) {
    city.querySelector('.city-name').innerHTML = data.name;
    city.querySelector('img').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
    city.querySelector('.city-header p').innerHTML = `${Math.round(data.main.temp)}°C`;
    city.querySelector('.feels-like').innerHTML = `${Math.round(data.main.feels_like)}°C`;
    city.querySelector('.wind-speed').innerHTML = `${Math.round(data.wind.speed)} m/s`;
    city.querySelector('.humidity').innerHTML = `${data.main.humidity}%`;
    city.querySelector('.pressure').innerHTML = `${data.main.pressure} hPa`;
    city.querySelector('.coords').innerHTML
        = `[${data.coord.lon.toFixed(2)}, ${data.coord.lat.toFixed(2)}]`;
}