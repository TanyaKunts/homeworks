const min = Number(prompt('Введите минимальное число: '))
const max = Number(prompt('Введите максимальное число: '))

function getNumber(min, max) {
  const N = Math.random() * (max - min + 1) + min;
  return Math.round(N);
}
console.log(getNumber(min, max))