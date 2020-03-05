const arr = [];
const arr2 = [];
const getRandom = function(min, max) {
  return Math.round(Math.random() * max + min)
}
for (let i = 0; i < 10; i++) {
  let object = {
    x: getRandom(1, 9),
    y: getRandom(1, 9)
  }
  arr.push(object)
  arr2.push(object)
}

const printY = function(unsortArr) {
 return unsortArr.sort((a, b) => a.y - b.y)
}
console.log(arr2)
console.log(printY(arr));
