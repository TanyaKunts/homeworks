const div = document.getElementById('square');
function showSub(e) {
    e.preventDefault()
    let screenX = window.screen.width;;
    let screenY = window.screen.height;;
    let x = e.clientX;
    let y = e.clientY;
    if ((x + 250) > screenX || (y + 100) > screenY) {
        return
    } else {
        div.style.display = "block";
        div.style.left = x + 'px';
        div.style.top = y + 'px';
    }

}
function hideSub() {
    if (div.style.display === "block") {
        div.style.display = "none";
    }
}
document.addEventListener('click', hideSub)
document.addEventListener('contextmenu', showSub);
const action = document.getElementsByClassName('submenu')[0];
action.addEventListener('click', function(e){
    alert(e.target.innerText)
    e.stopPropagation()
})