const staff = [
    { name: 'Alex Smidt', post: 'department head', date: new Date(2014, 03, 24), salary: 700 },
    { name: 'Maria Smidt', post: 'deputy chief', date: new Date(2014, 04, 24), salary: 500 },
    { name: 'Max Ivanov', post: 'courier', date: new Date(2014, 01, 24), salary: 300 },
    { name: 'Aria Ivanova', post: 'creative manager', date: new Date(2014, 06, 24), salary: 400 },
    { name: 'Hanna Marin', post: 'accountant', date: new Date(2014, 07, 24), salary: 400 },
];
const staffTable = document.getElementById('myTable')
staffTable.insertAdjacentHTML('beforeend', `<tr><th>ФИО</th><th>Должность</th><th>Дата начала работы</th>
<th>Зарплата</th><th>Удаление сотрудника</th></tr>`)
for (let i = 0; i < staff.length; i++) {
    staffTable.insertAdjacentHTML('beforeend', `<tr><td>${staff[i].name}</td><td>${staff[i].post}</td>
    <td>${staff[i].date}</td><td>${staff[i].salary}</td><td><button>Удалить сотрудника</button></td></tr>`)
}

const buttons = document.querySelectorAll('td button')
for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener('click', function () {
        this.parentNode.parentNode.remove()
        staff.splice(i, 1)
    })

}

const form = document.getElementById('myForm');
form.insertAdjacentHTML('beforeend', `ФИО: <input id='name' value = ' '>
                                           Должность: <input id='post' value = ' '>
                                            Дата начала работы: <input id='date' value = ' '>
                                            Зарплата: <input id='salary' value = ' '>
                                            <button id='add'>
                                            Добавить сотрудника в таблицу.
                                            </button >`)
const buttonAdd = document.getElementById('add');
const clickHandler = function () {
    const myName = document.getElementById('name').value;
    const myPost = document.getElementById('post').value;
    const myDate = document.getElementById('date').value;
    const mySalary = document.getElementById('salary').value;
    staffTable.insertAdjacentHTML('beforeend', `<tr><td>${myName}</td><td>${myPost}</td>
    <td>${myDate}</td><td>${mySalary}</td><td><button>Удалить сотрудника</button></td></tr>`)
    staff.push({ name: myName, post: myPost, date: myDate, salary: mySalary })
};
const btnSortBySal = document.getElementById('sortBySalaryBtn')
const btnSortByDate = document.getElementById('sortByDateBtn')

function render(staff) {
    const list = document.getElementById('myTable')
    list.innerHTML = ''
    for (let i = 0; i < staff.length; i++) {
        list.insertAdjacentHTML('beforeend', `<tr><td>${staff[i].name}</td><td>${staff[i].post}</td>
        <td>${staff[i].date}</td><td>${staff[i].salary}</td><td><button>Удалить сотрудника</button></td></tr>`)
    }
}
render(staff)
let buttonClicks = 0;
const sortSalary = function () {
    const sortedItems = [...staff].sort((a, b) => a.salary - b.salary);
    render(sortedItems);
    buttonClicks++
    if (buttonClicks % 2 === 0) {
        const sortedItems = [...staff].sort((a, b) => b.salary - a.salary);
        render(sortedItems);
    }

}
btnSortBySal.addEventListener('click', sortSalary)

render(staff)
const sortDate = function () {
    const sortedItems = [...staff].sort((a, b) => a.date - b.date);
    render(sortedItems)
    buttonClicks++
    if (buttonClicks % 2 === 0) {
        const sortedItems = [...staff].sort((a, b) => b.date - a.date);
        render(sortedItems);
    }
}
btnSortByDate.addEventListener('click', sortDate)