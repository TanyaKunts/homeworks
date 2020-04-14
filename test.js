let file = 0;
const btnAnalize = document.getElementById('analize');
btnAnalize.addEventListener('click', function (e) {
    const input = document.getElementById('choose')
    const file = input.files[0]
    if (!file) {
        document.getElementById('dang').innerText = 'Загрузите файл!';
        const btnChoose = document.getElementById('choose');
        btnChoose.style.border = '2px solid red';
        return
    }


    document.getElementById('dang').innerText = 'Файл загружен';
    const btnChoose = document.getElementById('choose');
    btnChoose.style.border = 'none';
    const reader = new FileReader;
    reader.onload = () => {
        const beforeSort = reader.result;
        const sortFile = beforeSort.split('').sort();
        createTable(sortFile)
        console.log(sortFile);
    }
    reader.readAsText(file)


    const createTable = function (sortFile) {
        const table = document.getElementById('content');
        let tableContent = ''
        tableContent += '<table class="table table-striped"><tr><th scope="col">Символ</th><th scope="col">Количество</th></tr>';
        for (let i = 0; i < sortFile.length; i++) {
            tableContent += `<tr scope="row"><td>${sortFile[i]}</td><td>${i + 1}</td></tr>`;

        }
        tableContent += '</table>'
        table.innerHTML = tableContent;
        console.log(table)
    }
});