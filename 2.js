const N=prompt("Введите число: ");
const A = Number(N);
if ((A%2==0) && (A!=1) && (A!=2)){
  	alert('Составное число');
 }else{
    alert('Простое число');
 }