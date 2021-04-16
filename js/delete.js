function deleteCity(object) {
    let onSuccess = () => {
        object.parentElement.parentElement.remove();
    }

    let onFail = (e) => {
        alert(e);
    }

    fetchDeleteCity(object.parentElement.querySelector("h3").textContent).then(onSuccess).catch(onFail)
}