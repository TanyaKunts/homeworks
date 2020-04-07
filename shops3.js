const xhr = new XMLHttpRequest();
let clicks = {
  'shop1.json': 0,
  'shop2.json': 0,
  'shop3.json': 0
};
xhr.open('GET', 'shops.json', true);
xhr.onload = function () {
  const data = JSON.parse(this.response);
  console.log(data);


  const ul = document.getElementById('mainUl')
  data.forEach((shop) => {
    const li = document.createElement('li');
    li.classList.add("list-group-item")
    li.insertAdjacentHTML('beforeend', `<h2 class = 'names'>${shop.name}</h2`)
    ul.appendChild(li);
  });
  const names = document.getElementsByClassName('names')
  for (let i = 0; i < names.length; i++) {
    names[i].parentElement.addEventListener('click', function (e) {
      if (i === 0) {
        clicks['shop1.json']++;
        innerXhr('shop1.json', e.target)
      }
      if (i === 1) {
        clicks['shop2.json']++;
        innerXhr('shop2.json', e.target)
      }
      if (i === 2) {
        clicks['shop3.json']++;
        innerXhr('shop3.json', e.target)
      }
    })
  }
  const innerXhr = function (fileName, parent) {
    if (clicks[fileName] % 2 === 0) {
      parent.getElementsByClassName("innerShopContent")[0].remove();
    } else {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', fileName, true);
      xhr.onload = function () {
        const innerData = JSON.parse(this.response);
        console.log(innerData);

        let sumVis = 0;
        let sumS = 0;
        let innerShopContent = document.createElement('div');
        innerShopContent.className = "innerShopContent";
        for (let i = 0; i < innerData.length; i++) {
          const smallUl = document.createElement('ul');
          const smallLi = document.createElement('li');
          smallLi.insertAdjacentHTML('beforeend', `<p>${innerData[i].adress}</p>`);
          smallUl.appendChild(smallLi);

          innerShopContent.appendChild(smallUl);

          sumS += innerData[i].S;
          sumVis += innerData[i].average;

        }

        const divN = document.createElement('div');
        divN.innerHTML = `Количество магазинов: ${innerData.length}`
        innerShopContent.appendChild(divN);

        const divS = document.createElement('div');
        divS.innerHTML = `Суммарная площадь : ${sumS}`
        innerShopContent.appendChild(divS);

        const divAv = document.createElement('div');
        let average = Math.round(sumS / innerData.length)
        divAv.innerHTML = `Средняя площадь : ${average}`
        innerShopContent.appendChild(divAv);

        const divVis = document.createElement('div');
        divVis.innerHTML = `Суммарное дневное число посетителей: ${sumVis}`
        innerShopContent.appendChild(divVis);
        parent.appendChild(innerShopContent);
      }
      xhr.send(null);
    }
  }
}



xhr.send(null);


