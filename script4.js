const arrProducts = [];
const names = ['name1', 'name2', 'name3', 'name4', 'name5', 'name6'];
let content = '<ul>';
const goodsCount = 12;
const products = document.getElementById("prod");
for (let i = 0; i < goodsCount; i++) {
    let randomElem = Math.floor(Math.random() * names.length);
    const product = {
        img: names[randomElem],
        name: names[randomElem],
        description: "описание",
        quantity: Math.round(Math.random() * 600 + 1),
        price: Math.round(Math.random() * 900 + 1)

    };
    arrProducts.push(product);
    if (i % 4 === 0 && i != goodsCount-1  && i != 0) {
        content += `</ul><ul>`
    }
    content += `<li>
                    <h2>${arrProducts[i].name}</h2>
                    <img src='./${arrProducts[i].img}.jpg'/>
                    <p>${arrProducts[i].description}</p>
                    <p>${arrProducts[i].quantity}</p>
                    <p>${arrProducts[i].price}</p>
                </li>`;
    
}
content+='</ul>';
products.innerHTML = content;