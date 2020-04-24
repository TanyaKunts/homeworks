const newPromise = new Promise(function (resolve, reject) {
    window.navigator.geolocation.getCurrentPosition(function (pos) {
        resolve(pos.coords)
    }), function (error) {
        reject(error)
    };
})
newPromise.then(function (coords) {
    console.log(coords)
    const xhr = new XMLHttpRequest();
    const latitude = coords.latitude.toFixed(2);
    const longitude = coords.longitude.toFixed(2);
    xhr.open('GET', `https://www.metaweather.com/api/location/search/?lattlong=${latitude},${longitude}`, true);
    xhr.onload = function () {
        const data = JSON.parse(xhr.responseText);
        console.log(data);
        for (let i = 0; i < 5; i++) {
            const table = document.getElementById('table');

            table.insertAdjacentHTML('beforeend', `<tr scope="row"><td>${data[i].title}</td></tr>`);
            const xhr2 = new XMLHttpRequest();
            xhr2.open('GET', `https://www.metaweather.com/api/location/${data[i].woeid}/`, true);
            xhr2.onload = function () {
                const dataIn = JSON.parse(xhr.responseText);
                console.log(dataIn);
            }
            xhr2.send();


        }
    }
    xhr.send();
}).catch((error) => {
    alert(error);
})
