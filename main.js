//1. Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
const array = [1, 4, 's', 'd', 1];

function calculateAverage(numbers) {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === 'number') {
      sum += numbers[i];
      count++;
    }
  }

  return sum / count;
}
const result1 = calculateAverage(array);
console.log(result1, 'середнє значення');

// 2. Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.
function doMath(x, znak, y) {
  const mathOperations = ['+', '-', '*', '/', '%', '^'];
  x = +x;
  y = +y;
  if (isNaN(x)) {
    return alert('x is not a number');
  }
  if (isNaN(y)) {
    return alert('y is not a number');
  }
  if (mathOperations.indexOf(znak) === -1) {
    return alert('operation is not supported');
  }
  let result;
  switch (znak) {
    case '+':
      result = x + y;
      break;
    case '-':
      result = x - y;
      break;
    case '*':
      result = x * y;
      break;
    case '/':
      result = x / y;
      break;
    case '%':
      result = (x / y) * 100;
      break;
    case '^':
      result = x ** y;
      break;
    default:
      break;
  }

  return result;
}

const x = prompt('Введіть значення числа x');
const znak = prompt('Введіть математичний оператор');
const y = prompt('Введіть значення числа y');
const result2 = doMath(x, znak, y);
console.log(result2);

// 3.Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.
function createArray() {
  const mainArrayLength = +prompt('Введіть довжину основного масиву:');
  const array = [];
  for (let i = 0; i < mainArrayLength; i++) {
    const internalArrayLength = +prompt(
      `Введіть довжину внутрішнього масиву ${i}:`
    );
    const internalArray = [];
    for (let j = 0; j < internalArrayLength; j++) {
      const value = prompt(`Введіть значення для елемента [${i}][${j}]:`);

      internalArray.push(value);
    }
    array.push(internalArray);
  }
  return array;
}

const result3 = createArray();
console.log(result3);

// 4.Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

function deleteSymbols(string, symbols) {
  symbols = symbols.split(',').map((item) => item.trim());
  let result = string;
  for (let i = 0; i < symbols.length; i++) {
    result = result.replaceAll(symbols[i], '');
  }
  return result;
}
const string = prompt('Введіть рядок символів');
const symbols = prompt('Введіть масив символів через кому');
const result4 = deleteSymbols(string, symbols);
console.log(result4);
