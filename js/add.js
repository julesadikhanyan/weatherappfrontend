async function addCity() {
    let input = document.querySelector('input').value;
    if (input !== '') {
        let city = createFromTemplate();

        let onSuccess = (data) => {
            if (data === false) {
                alert("City already exists")
                city.remove();
                return;
            }
            console.log('add city');
            console.log(data);
            console.log(city);

            printFavoriteCity(data, city);
        }

        let onFail = (e) => {
            alert(e);
            city.remove();
            return;
        }

        fetchAddCity(input).then(onSuccess).catch(onFail);

        document.querySelector('input').value = "";
    }
}