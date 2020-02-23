//1. Получаем количество минут, которое прошло сегодня-- количество часов *60+ количество минут
//2. Вводим общее количество минут в 24 часах==1440
//3. Отнимаем от общего количества количество пройденный минут
//4. Выводим 
let d= new Date();
let hours = d.getHours();
let minutes = d.getMinutes();
let min=hours*60+minutes;
let totalMinutes=1440;
let ostatok= Math.round(totalMinutes-min); 
alert(ostatok)