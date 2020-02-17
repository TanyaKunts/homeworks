const N1=prompt("Введите первое число: ");
const N2=prompt("Введите второе число: ");
const N3=prompt("Введите третье число: ");
const A = Number(N1);
const B = Number(N2);
const C = Number(N3);
if(((A+B)>C) && ((B+C)>A) && ((A+C)>B)){
 alert('Треугольник можно построить!')
}else{
alert('Треугольник нельзя построить.')
}