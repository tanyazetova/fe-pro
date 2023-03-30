const arr = [7, 1, 5, 7, 3, 9, 2];
let n;
console.log(arr, 'initial array');

for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
  n = arr[j];
  arr[j] = arr[i];
  arr[i] = n;
}
console.log(arr, 'reversed array');
