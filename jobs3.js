const button = document.getElementById('btn');
button.addEventListener('click', function () {
    let job = document.getElementById('job').value;
    let location = document.getElementById('location').value;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://jobs.github.com/positions.json?description=${job}&location=${location}`, true);
    xhr.onload = function () {
        let data = JSON.parse(this.response);
        console.log(data);
        data.forEach((jobItem) => {
            const ul = document.getElementById('list');
            ul.insertAdjacentHTML('beforeend', `<li><h2>${jobItem.title}</h2>
            <p><span>Вакансия была размещена: </span> ${jobItem.created_at}</p>
            <p><span>Компания: </span>${jobItem.company}</p>
            <p><span>Месторасположение: </span>${jobItem.location}</p>
            <p><span>График работы: </span>${jobItem.type}</p>
            <p><span>Описание: </span>${jobItem.description}</p>
            <p><span>Ссылка: </span><a href = '${jobItem.url}'>${jobItem.url}</a></p></li>`);
        });
    }
    xhr.send(null);
})
