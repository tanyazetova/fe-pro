const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr, 'initial array');

for (let i = 0; i < arr.length; i = i + 2) {
  if (!(arr.length % 2 === 1 && i === arr.length - 1)) {
    let temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
}
console.log(arr, 'array with swapped elements');
