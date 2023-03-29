let n;
do {
  n = +prompt('Enter the array length');
} while (isNaN(n) || n < 0);
console.log(n, 'Array length');

const array = [];
for (i = 0; i < n; i++) {
  array.push(Math.round(Math.random() * 100));
}
console.log(array, 'Array');
