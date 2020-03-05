const exp = /^[+]1\d{3}[-]\d{3}[-]\d{4}/;
const str = prompt('Введите номер: ');
console.log(exp.test(str));
