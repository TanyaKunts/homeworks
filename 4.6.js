let apartments = [];
for (let i = 0; i <= 8; i++) {
  let apartment = {
    numberFlat: i,
    countRooms: Math.round(Math.random() * 4 + 1),
    countResidents: Math.round(Math.random() * 6 + 1),
    square: Math.round(Math.random() * 75 + 1),
    numberFloor: Math.round(Math.random() * 4 + 1),
    getUtilities: function(month) {
      let x = 1.8

      if (4 <= month && month <= 10) {
        x = 1.8
      } else {
        x = 1
      }
      return (x * (this.square) * (this.countResidents)) / 2;
    },
    getUtilitiesForYear: function() {
      let sum = 0;
      for (let i = 1; i < 13; i++) {
        sum += this.getUtilities(i);
      }
      return sum
    }
  }
  apartments.push(apartment);
}

const house = {
  adress: 'Minsk, Nothing str. 0',
  year: 2015,
  countFloor: 4,
  flats: apartments,
  getSumS: function() {
    let square = 0;
    for (let i = 0; i < this.flats.length; i++) {
      square += this.flats[i].square;
    }
    return square;
  },
  getPopulation: function() {
    let population = 0;
    for (let i = 0; i < this.flats.length; i++) {
      population += this.flats[i].countResidents;
    }
    return population;
  },
  getHouseUtilitiesForYear: function() {
    let sum = 0;
    for (let i = 0; i < this.flats.length; i++) {
      sum += this.flats[i].getUtilitiesForYear();
    }
    return sum;
  },
  getDensity: function() {
    return (this.getPopulation() / this.getSumS());
  }
}

for (let i = 0; i < house.flats.length; i++) {
  let flat = house.flats[i].numberFlat;
  let month = Math.round(Math.random() * 12 + 1);
  let utilities = Math.round(house.flats[i].getUtilities(month));
  console.log('В квартире № ' + flat + ' в ' + month + ' месяце ' + ' размер коммунальных услуг составит ' + utilities)
}
console.log('Суммарная площадь равна ' + house.getSumS())
console.log('Общее количество жильцов дома ' + house.getPopulation())
console.log('Суммарное годовое обслуживание всех квартир ' + (house.getHouseUtilitiesForYear()));
console.log('Плотность дома составляет ' + house.getDensity());
