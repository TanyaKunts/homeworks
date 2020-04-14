const xhr = new XMLHttpRequest();
xhr.open('GET', `products.json`, true);
xhr.onload = function () {
    let data = JSON.parse(this.response);
    console.log(data);
    let basketContent = [];

    data.forEach((product) => {
        const ul = document.getElementById('list');
        ul.insertAdjacentHTML('beforeend', `<li><h4>${product.title}</h4>
        <h5><span>Описание: </span> ${product.description}</h5>
        <img src =  ${product.img} />
        <h5><span>Количество на складе: </span>${product.count}</h5>
        <button class = 'addInBasket' type="button">В корзину</button></li>`);
    });


    const btnAdd = document.getElementsByClassName('addInBasket');
    const count = document.getElementById('basketCount');
    let clickCount = Number(localStorage.getItem('clicks')) ;
    count.innerText = clickCount;


    for (let i = 0; i < btnAdd.length; i++) {
        btnAdd[i].addEventListener('click', function () {
            clickCount ++;
            count.innerText = clickCount;
            basketContent.push(JSON.parse(JSON.stringify(data[i])));//!!!!!!!!!!!!!
            localStorage.setItem('clicks', clickCount);
        })
    }

    const div = document.getElementById('window');
    const basket = document.getElementById('basket');

    clickCount = 0;
    basket.addEventListener('click', function () {
        const divContentGoods = document.getElementById('dialogContent');
        divContentGoods.innerHTML = '';
        let tableContent = (localStorage.getItem('table'));
        tableContent = '<table class="table table-sm"><th scope="col">№</th><th scope="col">Наименование товара</th>';

        for (let i = 0; i < basketContent.length; i++) {
            tableContent += '<tr scope="row">';
            tableContent += `<td>${[i+1]}</td><td>${basketContent[i].title}</td>`;
            tableContent += '</tr>';
        }
        tableContent += '</table>';
        localStorage.setItem('table', tableContent);
        divContentGoods.innerHTML = tableContent;
        


        div.style.display = 'flex';
        div.style.justifyContent = 'space-between'
        clickCount++;
        window.addEventListener('click', function (e) {
            if (e.target == div) {
                div.style.display = 'none'
            }
        })
        const closeDiv = document.getElementById('close');
        closeDiv.addEventListener('click', function () {
          div.style.display = 'none';
        });
    })
  
    const resetBtn = document.getElementById('reset');
    resetBtn.addEventListener('click', function () {
        clickCount = 0;
        const count = document.getElementById('basketCount');
        count.innerText = clickCount;
        localStorage.clear()
    })
}
xhr.send(null);


