const arr = [];
const n = 4;
const m = 4;

for (let i = 0; i < n; i++) {
  arr[i] = [];
  for (let j = 0; j < m; j++) {
    arr[i][j] = Math.floor(Math.random() * 10);
  }
}

let minSum = Infinity;
let minColumn = -1;
let maxSum = -Infinity;
let maxColumn = -1;

for (let j = 0; j < m; j++) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i][j];
  }
  if (sum < minSum) {
    minSum = sum;
    minColumn = j;
  }
  if (sum > maxSum) {
    maxSum = sum;
    maxColumn = j;
  }
}

console.log(arr, 'двовимірний масив');
console.log(
  `${minColumn} = індекс стовпця з мінімальною суммою \n${minSum} = мінімальна сумма стовпця`
);

console.log(
  `${maxColumn} = індекс стовпця з максимальною суммою\n${maxSum} = максимальна сумма стовпця`
);
