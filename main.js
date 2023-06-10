class Size {
  constructor(name, price, calories) {
    this.name = name;
    this.price = price;
    this.calories = calories;
  }
}

class Stuffing {
  constructor(name, price, calories) {
    this.name = name;
    this.price = price;
    this.calories = calories;
  }
}

class Topping {
  constructor(name, price, calories) {
    this.name = name;
    this.price = price;
    this.calories = calories;
  }
}

class Hamburger {
  static SIZE_SMALL = new Size('Маленький', 50, 20);
  static SIZE_BIG = new Size('Великий', 100, 40);
  static STUFFING_CHEESE = new Stuffing('Сир', 10, 20);
  static STUFFING_SALAD = new Stuffing('Салат', 20, 5);
  static STUFFING_POTATO = new Stuffing('Картопля', 15, 10);
  static TOPPING_SAUCE = new Topping('Приправа', 15, 0);
  static TOPPING_MAYO = new Topping('Майонез', 20, 5);

  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  calculatePrice() {
    const sizePrice = this.size.price;
    const stuffingPrice = this.stuffing.price;
    const toppingsPrice = this.toppings.reduce(
      (total, topping) => total + topping.price,
      0
    );
    return sizePrice + stuffingPrice + toppingsPrice;
  }

  calculate() {
    const sizeCalories = this.size.calories;
    const stuffingCalories = this.stuffing.calories;
    const toppingsCalories = this.toppings.reduce(
      (total, topping) => total + topping.calories,
      0
    );
    return sizeCalories + stuffingCalories + toppingsCalories;
  }
}

// маленький гамбургер з начинкою з сиру
var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавка з майонезу
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// запитаємо скільки там калорій
console.log('Calories: ' + hamburger.calculate());

// скільки коштує
console.log('Price: ' + hamburger.calculatePrice());

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А скільки тепер коштує?
console.log('Price with sauce: ' + hamburger.calculatePrice());
