class Human {
  name;
  gender;

  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

class Flat {
  residents = [];
  addResident(human) {
    this.residents.push(human);
  }
}

class House {
  flats = [];
  maxNumberFlats;

  constructor(maxNumberFlats) {
    this.maxNumberFlats = maxNumberFlats;
  }

  addFlat(flat) {
    if (this.flats.length < this.maxNumberFlats) {
      this.flats.push(flat);
    } else {
      console.log('the maximum number of flats has been exceeded');
    }
  }
}

const human1 = new Human('Valera', 'man');
const human2 = new Human('Lena', 'woman');
const human3 = new Human('Igor', 'man');
const flat1 = new Flat();
const flat2 = new Flat();
const flat3 = new Flat();
flat1.addResident(human1);
flat2.addResident(human1);
flat2.addResident(human2);
flat3.addResident(human3);
const house = new House(2);
house.addFlat(flat1);
house.addFlat(flat2);
house.addFlat(flat3);
