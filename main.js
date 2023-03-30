let n;
const A = [];

do {
  n = +prompt('Enter the array length');
} while (isNaN(n));
console.log(n, 'Array length');

for (let i = 0; i < n; i++) {
  A.push(Math.round(Math.random() * 1000));
}

console.log(A, 'initial array A');

A.sort(function (a, b) {
  return a - b;
});

console.log(A, 'sorted array A');

const min = A[0];
const max = A[A.length - 1];

console.log(min, 'min value of array A');
console.log(max, 'max value of array A');

const B = A.slice(1, -1);

console.log(B, 'new array B');
