const N1=prompt("Введите первое число: ");
const N2=prompt("Введите второе число: ");
const A = Number(N1);
const B = Number(N2);
if(A%B===0){
    alert('Первое число делится на второе нацело.')
}else{
    alert('Первое число не делится на второе нацело.')
}
