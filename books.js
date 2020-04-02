const booksArray = [
    {
        title: 'Утюжок и мороженое',
        author: 'Ирина Полянская'
    },{
        title: 'Высшее образование',
        author: 'Рон Баст'   
    },{
        title: 'В поисках Правды',
        author: 'Роберт Томпкинс'
    }
]
const booksList = document.getElementById('booksList');
booksArray.forEach((book) => {
    booksList.insertAdjacentHTML('beforeend',
    `<li class = 'classLi'><h2>${book.title}</h2>
    <p>${book.author}</p></li>`)
})
booksList.firstElementChild.addEventListener('click', function(){
    loadFile('1.txt')
})
booksList.childNodes[2].addEventListener('click', function(){
    loadFile('2.txt')
})
booksList.lastElementChild.addEventListener('click', function(){
    loadFile('3.txt')
})


function loadFile(fileName) {
    const xhr = new XMLHttpRequest(); 
    xhr.open('GET', fileName, true);
    xhr.onload = function () {
        const readField = document.getElementById('readField');
        readField.innerHTML = this.responseText;
    }
    xhr.send(null);
    const readField = document.getElementById('readField');
    readField.innerHTML = `<div class="d-flex justify-content-center">
                                <div class="spinner-border" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                            </div>`
}
const readField = document.getElementById('readField');
readField.addEventListener('change', function(){//?
    const readField =  document.getElementById('readField');
    readField.classList.add('readFieldChange')
})




