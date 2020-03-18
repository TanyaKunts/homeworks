const text = document.getElementById('text');
text.addEventListener('click', function(e){
    if(e.target.closest('a')){
        document.body.insertAdjacentHTML('beforeend', `Дейтсвительно ли вы хотите перейти по этой ссылке?
        <button id = 'yes'>yes</button>
        <button id = 'no'>no</button>`)
        }
        const yes = document.getElementById('yes')
        yes.addEventListener('click', function(){
            location.href = 'http://www.tut.by'
        })
})