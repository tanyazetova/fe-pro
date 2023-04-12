console.log('Задача-1');

function reverseRow(n) {
  if (n === 0) {
    return;
  }
  console.log(n);
  return reverseRow(n - 1);
}
reverseRow(5);

console.log('Задача-2');

function sumToArray(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr.pop() + sumToArray(arr);
  }
}
let result = sumToArray([1, 2, 3]);
console.log(result, 'sum of array');

console.log('Задача-3');

function calculeteFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  const result = n * calculeteFactorial(n - 1);

  return result;
}

let result1 = calculeteFactorial(5);

console.log(result1, 'Factorial');
