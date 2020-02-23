let str = prompt('Введите строку: ');
let lit=0;
for(let i= 0; i< str.length; i++){
    if([i]== 'A' || [i]== 'E' || [i] == 'I' || [i] == 'O' || [i]== 'U' || [i]== 'Y'||
    [i]== 'a' || [i]== 'e' || [i] == 'i' || [i] == 'o' || [i]== 'u' || [i]== 'y'){
        lit++
  }
}
alert(lit)
let arr = str.split(' ');
let max='';
for(let i= 0; i< arr.length; i++){
	if(max.length<arr[i].length){
  max=arr[i];
  }
}
alert(max)