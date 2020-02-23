//1. Массив объектов -- объект несет имя, рандомнаую зп, РАНДОМНУЮ ДАТУ РОЖДЕНИЯ--1980-01-01---1995-12-31, возраст
//+2. Массив имен
//+3. Введите количество имен
//4. Массив с объектами людей в консоль
//5. Средняя зп в консоль
//6. Имя человека с самой высокой зп
let totalArray=[];
let peopleCount = Number(prompt('Введите количество людей: '));
let names=['Alex', 'Aria', 'Max', 'Eva', 'Ella', 'Lily', 'Emily'];
let sumAge=0;
let maxSalary=0;
const startDate = new Date('1980-01-01').getTime();
const endDate = new Date('1995-12-31').getTime();
const currentYear=new Date().getYear();
let maxSalaryPerson='';
for (let i=0; i<peopleCount; i++){
  const randomI = Math.floor (Math.random() * names.length );
  const randomD= startDate + Math.random() * (endDate  + 1 - startDate)
	const person = {
    name: names[randomI],
    salary: Math.floor(Math.random()*(500+1)),
    birthday: new Date(randomD)
	}
  if(maxSalary<person.salary){
  		maxSalary=person.salary;
      maxSalaryPerson=person.name;
  	}
   sumAge+=currentYear-person.birthday.getYear()
	totalArray.push(person)
}
alert(JSON.stringify(totalArray));
alert(maxSalaryPerson);
alert( sumAge/peopleCount)
