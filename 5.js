const N1=prompt("Введите первое число: ");
const N2=prompt("Введите второе число: ");
const N3=prompt("Введите третье число: ");
const A = Number(N1);
const B = Number(N2);
const C = Number(N3);
const p=((A+B+C)/2);
alert((p*((p-A)*(p-B)*(p-C)))**1/2)
