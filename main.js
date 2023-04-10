console.log('Задача - 1');

function filter(array, cb) {
  const result = [];

  for (let index = 0; index < array.length; index++) {
    if (cb(array[index])) {
      result.push(array[index]);
    }
  }

  return result;
}

const input = [1, 2, 3, 4, 5, 6];
function isEven(x) {
  return x % 2 == 0;
}
function greater3(x) {
  return x > 3;
}
console.log(input, 'initial array');
console.log(filter(input, isEven), 'filtered array');
console.log(filter(input, greater3), 'filtered array');

console.log('Задача - 2');

function copy(array, cb) {
  const result = [];

  for (let index = 0; index < array.length; index++) {
    result.push(typeof cb === 'function' ? cb(array[index]) : array[index]);
  }

  return result;
}

const list = [3, 5, 6, 7, 9, 1, 2];

console.log(list, 'Initial array');
console.log(
  copy(list, (value) => value * 10),
  'Copied array'
);
console.log(
  copy(list, (value) => value ** 2),
  'Copied array'
);
