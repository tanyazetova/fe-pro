function removeElement(array, item) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] === item) {
      array.splice(i, 1);
    }
  }
  return array;
}

const array = [1, 2, 5, 3, 4, 5, 6, 7];
console.log(array, 'initial array');

removeElement(array, 5);

console.log(array, 'changed array');
