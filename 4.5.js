function getNumber() {
    const N = Number(prompt('Введите число: '))
    for (i = 2; i <= Math.sqrt(N); i++)
      if ((N % i) === 0) {
        return 'Составное число'
      } else {}
    return 'Простое число'
  }
  
  console.log(getNumber());
  