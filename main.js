class Human {
  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getInfoOfHuman() {
    console.log(`name: ${this.name}, age: ${this.age}`);
  }
}

class Car {
  brand;
  model;
  year;
  license;
  owner;

  constructor(brand, model, year, license) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.license = license;
  }
  setOwner(driver) {
    if (driver.age > 18) {
      this.owner = driver;
    } else {
      console.log('to young for driver');
    }
  }
  getInfoOfCar() {
    console.log(
      `brand: ${this.brand}, model: ${this.model}, year: ${this.year}, license: ${this.license}`
    );
    if (this.owner) {
      this.owner.getInfoOfHuman();
    } else {
      console.log('this car dont have owner');
    }
  }
}

const human1 = new Human('Valera', 20);
const human2 = new Human('Lena', 17);
const human3 = new Human('Alex', 47);
const car1 = new Car('Lexus', 'UX 250h', 2018, 'KX 1830');
const car2 = new Car('Skoda', 'Octavia  A7', 2017, 'AX 5231');
const car3 = new Car('Toyota', ' RAV4', 2018, 'BB 2522');

human1.getInfoOfHuman();
human2.getInfoOfHuman();
human3.getInfoOfHuman();

car1.setOwner(human1);
car1.getInfoOfCar();
car2.setOwner(human2);
car2.getInfoOfCar();
car3.setOwner(human3);
car3.getInfoOfCar();
