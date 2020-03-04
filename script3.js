const arrCountries = [];
const names = ['Belarus', 'Russia', 'Belgium', 'Lithuania', 'Latvia']
const countries = document.getElementById('countries');
let table = '<table> <tr> <th> Название </th> <th> Площадь </th> <th> Население </th> <th> Язык </th> <th> Тел. код </th><th> Флаг </th></tr>';
for (let i = 0; i < names.length; i++) {
    const country = {
        name: names[i],
        S: Math.round(Math.random() * 600 + 1),
        population: Math.round(Math.random() * 10000 + 1),
        language: names[i],
        telCode:Math.round(Math.random() * 1000 + 1),
        flag: './'+names[i]+'.png'
    };
    arrCountries.push(country);
    table+=`<tr><td>${country.name}</td> <td>${country.S}</td><td>${country.population}</td><td>${country.language}</td><td>${country.telCode}</td><td><img src='${country.flag}'/></td> </tr>`
    
}
table += '</table>';
countries.innerHTML = table;

