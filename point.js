//создать на странице контекстное меню
//меню должно учитывать точку,  в которой открывается, и не выходить за пределы страницы
const div = document.getElementById('square');
function showSub(e) {
    //заблокировали функцию по умолчанию
    e.preventDefault()
    let screenX = window.screen.width;//в переменные внесли координаты экрана
    let screenY = window.screen.height;
    let x = e.clientX;//координаты объекта
    let y = e.clientY;
    if ((x + 250) > screenX || (y + 100) > screenY) {//если объект выходит за поле, возвращать
        return
    } else {//задать объекту видимость и координаты
        div.style.display = "block";
        div.style.left = x + 'px';
        div.style.top = y + 'px';
    }

}
function hideSub() {//если объект видим, то задать невидимость при клике на экран 
    if (div.style.display === "block") {
        div.style.display = "none";
    }
}
document.addEventListener('click', hideSub)
document.addEventListener('contextmenu', showSub);
