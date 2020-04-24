const btn = document.getElementById('btn');
btn.addEventListener('click', function () {
    const newPromise = new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `https://freegeoip.app/json/`, true);
        xhr.onload = function () {
            const data = JSON.parse(xhr.responseText);
            resolve(data.ip);
        }
        xhr.onerror = () => reject('Error!');
        xhr.send();
    })
    newPromise.then(function (result) {
        const div = document.getElementById('ip');
        div.innerHTML = result
    }).catch((error) => {
        alert(error);
    })
})

