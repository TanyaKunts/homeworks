const xhr = new XMLHttpRequest();
xhr.open('GET', './tableStaff.csv', true);
xhr.onload = function () {
    const staffTable = document.getElementById('staffTable');
    let tableContent = '';
    let line = this.responseText.split('\n');
    for (let i = 0; i < line.length - 1; i++) {
        let delimeter = line[i].split(';')
        tableContent += '<tr scope="row">';
        for (let j = 0; j < delimeter.length; j++) {
            tableContent += `<td>${delimeter[j]}</td>`
        }
        tableContent += '</tr>';
    }
    staffTable.insertAdjacentHTML('beforeend', tableContent);
    
    


    const age = document.getElementById('age');
    age.addEventListener('click', function () {
        const staffTable = document.getElementById('staffTable');
        let sortByAge = Array.from(staffTable).sort(function (a, b) {
            return a.innerHTML - b.innerHTML;
        })
        render(sortByAge);
    })

    const name = document.getElementById('name');
    name.addEventListener('click', function () {
        const staffTable = document.getElementById('staffTable');
        let sortByName = Array.from(staffTable).sort()
        render(sortByName);
    })

    const boss = document.getElementById('boss');
    boss.addEventListener('click', function () {
        const staffTable = document.getElementById('staffTable');
        let sortByNameofBoss = Array.from(staffTable).sort()
        render(sortByNameofBoss);
    })



    const salary = document.getElementById('salary');
    salary.addEventListener('click', function () {
        const staffTable = document.getElementById('staffTable');
        let sortBySalary = Array.from(staffTable).sort(function (a, b) {
            return a.innerHTML - b.innerHTML;
        })
        render(sortBySalary);
    })


   function render(sortStaff) {
        const staffTable = document.getElementById('staffTable');
        staffTable.innerHTML = '';
        staffTable.insertAdjacentHTML('beforeend', sortStaff);
    }
}
xhr.send(null);
