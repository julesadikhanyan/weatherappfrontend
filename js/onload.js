window.onload = function () {
    getCurrentPosition();

    let onSuccess = (data) => {
        for (let name of data.favoriteCities) {
            let city = createFromTemplate();
            let onSuccessFetch = (data) => {
                printFavoriteCity(data, city);
            }

            let onFailFetch = (e) => {
                alert(e);
                city.remove();
                return;
            }

            fetchWeatherByName(name).then(onSuccessFetch).catch(onFailFetch);
        }
    }

    let onFail = (e) => {
        alert(e);
    }

    fetchGetFavourites().then(onSuccess).catch(onFail);
}

function createFromTemplate() {
    let favorites = document.querySelector('.favorites');
    let template = document.querySelector('.favorites-template');
    let clone = document.importNode(template.content, true);
    favorites.append(clone);
    return favorites.lastElementChild;
}