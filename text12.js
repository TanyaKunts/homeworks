const input = document.getElementById('text');
const arr = ['a', 'e', 'o', 'u', 'y', 'i', 'A', 'E', 'O', 'U', 'Y', 'I']
input.addEventListener('keypress', function (e) {
    if (arr.indexOf(String.fromCharCode(e.keyCode)) === -1) {
        e.preventDefault()
    }

})