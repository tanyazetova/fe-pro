let n;
const array = [];

do {
  n = +prompt('Enter the array length');
} while (isNaN(n) || n < 0);
console.log(n, 'Array length');

for (let i = 0; i < n; i++) {
  let number;

  do {
    number = +prompt('Enter positive number of array for index ' + i);
  } while (isNaN(number) || number < 0);

  array.push(number);
}

console.log(array, 'Entered array');
