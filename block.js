const divs = document.getElementsByClassName('item');
for(let i = 0; i < divs.length; i++){
divs[i].addEventListener('mousedown', function (e) {
    let x = e.offsetWidth;//координаты объекта
    let y = e.offsetHeight;

    const mainDiv = document.getElementById('main');
    mainDiv.addEventListener('mousemove', moveAt)
    function moveAt (e) {

        divs[i].style.left = x + e.offsetWidth + 'px';
        divs[i].style.top = y + e.offsetHeight + 'px';
    }
    mainDiv.addEventListener('mouseup', function () {
        this.removeEventListener('mousemove', moveAt)
    
    })
})
}



