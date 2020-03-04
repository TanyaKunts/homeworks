
const number = Number(prompt('Введите число: '));
let ourTable = document.getElementById("table");
let innerHtml = '';
for (let i = 1; i <= number; i++) {
  innerHtml += '<tr>';
  for (let j = 1; j <= number; j++) {
    innerHtml += '<td>' + i * j + '</td>'
  }
  innerHtml += '</tr>';
}
ourTable.innerHTML = innerHtml;