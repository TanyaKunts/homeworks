let str = prompt('Введите строку: ');
let lit = 0;
let arr = str.split(' ');
let max='';
const letterArray = ['a', 'e', 'i', 'o', 'u', 'y'];

for(let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    if(letterArray.includes (arr[i][j].toLowerCase())) {
      lit++;
    }
  }
	if(max.length < arr[i].length) {
    max=arr[i];
  }
}
alert(max)
alert(lit);